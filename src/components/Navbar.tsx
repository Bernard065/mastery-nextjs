import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
          <Link href="/project/list">
            <li>Project</li>
          </Link>
          <Link href={`/project/${id}`}>
            <li>Project</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
