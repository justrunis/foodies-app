# Next.js Foodies App

This is a Next.js app that uses the App Router for navigation.

## Description

The Next.js Foodies App is a web application built with Next.js, a React framework for server-side rendering and static site generation. It utilizes the App Router, a powerful routing solution for Next.js applications.

## Features

- Server-side rendering (SSR) for improved performance and SEO
- Static site generation (SSG) for fast loading times
- App Router for easy navigation between pages

## Installation

1. Clone the repository: `git clone https://github.com/your-username/foodies-app.git`
2. Install dependencies: `npm install`
3. Create a SQLite database by running `node initdb.js` command (this will also populate it with some data)
4. This project also uses AWS for storing images and needs and .env.locals file with these variables `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`
5. Also you would need to change the links where the AWS is used in the code (was too lazy to create the env file :) )

## Usage

1. Start the development server: `npm run dev`
2. Open your browser and navigate to `http://localhost:3000`
