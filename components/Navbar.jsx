import Link from "next/link";
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="py-4">
      <h1 className="text-3xl">Next JS</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/tienda">Tienda</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
