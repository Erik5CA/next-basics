"use client";

import Users from "@/components/Users";
import { useState } from "react";

function HomePage() {
  const [first, setfirst] = useState("hola");
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={() => alert("hello")}>Click</button>
      <p>{first}</p>
      <Users />
    </div>
  );
}

export default HomePage;
