"use client";

import ExampleServer from "./ExampleServer";

const ExampleClient = () => {
  console.log("I am a client Component");
  return (
   <> <div>
      <p>This is an example of a client component</p>
    </div>

    <ExampleServer />
    </>
  );
};

export default ExampleClient;
