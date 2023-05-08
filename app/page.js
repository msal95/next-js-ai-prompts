import Feed from "@components/Feed";
import React from "react";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center ">
        Discover and Share <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptia is an open-source AI prompting tool for modren world to
        Discover, Create and Share creative prompts
      </p>

      {/* Feed Components */}
      <Feed />
    </section>
  );
}
