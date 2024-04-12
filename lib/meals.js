import { S3 } from "@aws-sdk/client-s3";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const s3 = new S3({
  region: "eu-north-1",
});

const db = sql("meals.db ");

export async function getMeals() {
  // Simulate a slow network connection
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // Simulate an error
  //   throw new Error("Failed to fetch meals");
  return db.prepare("SELECT * FROM meals ").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  // Generate a slug from the title
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const bufferedImage = await meal.image.arrayBuffer();

  // Upload the image to S3
  s3.putObject({
    Bucket: "justrunis-image-bucket",
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });

  meal.image = fileName;

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(meal);
}
