"use client";
import { Button } from "@heroui/button";
import { useState } from "react";

import { title } from "@/components/primitives";

export default function FunFacts() {
  let facts: string[] = [
    "The world record for a 5 k is 12:35.36.",
    "In World War II, a bear served in the Polish army.",
    "A day on Venus is longer than a year on Venus.",
    "A group of crows is called a murder",
    "90% of the world's population lives in the Notnern Hemisphere.",
    "Over sixty percent of the world’s lakes are located in Canada.",
    "Central Park in New York City is larger than the entire country of Monaco.",
    "A fear of long words is called Hippopotomonstrosesquippedaliophobia.",
    "Sudan has more pyramids than any country in the world.",
    "The human circulatory system is more than 60,000 miles long.",
  ];
  const [fact, setFact] = useState("");

  return (
    <div>
      <h1 className={title()}>Fun Facts</h1>
      <div className="flex flex-wrap border-dotted border-4 border-gray-600 p-4 justify-left">
        <Button
          onPress={() => {
            setFact(facts[Math.floor(Math.random() * facts.length)]);
          }}
        >
          Press for a fact
        </Button>
        <p>{fact}</p>
      </div>
    </div>
  );
}
