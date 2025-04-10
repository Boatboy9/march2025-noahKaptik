"use client";

import { Button } from "@heroui/button";
import link from "next/link";

import { title } from "@/components/primitives";

export default function AboutMe() {
  return (
    <div>
      <h1 className={title()}>About Me</h1>
      <div className="flex flex-wrap border-dotted border-4 border-gray-600 p-4 justify-left">
        <img
          alt="View of a beach from on top of a rock"
          className="p-2"
          src="/sandpoint.png"
        />
        <p>
          This is an image from google maps of a place I have been. It&#39;s on
          the western coast of the Olympic Penisula. I go hear on a backpacking
          trips every year with my scout troop. I hgave a lot of friends in my
          troop so the trip is three days that I get to spend with them. I also
          just enjoy backpacking and spending time outdoors
        </p>
        <img
          alt="A trail in Lake Sammamish State Park"
          className="p-2"
          src="/lakesammamishcourse.png"
        />
        <p>
          This is an image of Issaquah High School&#39;s cross country course. I
          got a really big pr on the course so I like running it. About half of
          my friends to cross country so its something I have a lot of fun
          doing.
        </p>
        <img
          alt="The Yellow Lake part of Klahanie Park"
          className="p-2"
          src="/yellowlakestart.png"
        />
        <p>
          This is an image of the Yellow lake part of Klahanie Park. It&#39;s
          also the start line for Skyline&#39;s cross country course. Yellow
          Lake is important to me because it&#39;s somewhere I have spent a lot
          of time runnning.
        </p>
        <img alt="Mt. Rainer" className="p-2" src="/mtrainer.jpg" />
        <p>
          I took this picture after running up a mountain during a running
          summmer camp. I just thought it looked nice. It relates to my hobbies
          of running nand spending time in the outdoors.
        </p>

        <Button
          as={link}
          href="https://www.athletic.net/athlete/23638697/cross-country/high-school"
        >
          My cross country times
        </Button>
      </div>
    </div>
  );
}
