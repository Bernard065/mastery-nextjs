"use client";

import ExampleClient from "@/components/ExampleClient";

const Home = () => {
  console.log("Where do I render?");
  return (
    <main className="main">
      <h2>Welcome</h2>

      <ExampleClient />
    </main>
  );
};

export default Home;
