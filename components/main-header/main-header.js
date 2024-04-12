import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logo} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Browse meals</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
