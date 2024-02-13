import React from "react";
import Image from "next/image";
import HobbyItem from "./HobbyItem";

const HobbiesSection = () => {
    return (
      <section id="hobbies" className="py-16 bg-[#121212]">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div className="md:order-2">
            <Image src="/images/pc-setup.jpg" width={1000} height={1000} />
          </div>
          <div className="mt-4">
            <h2 className="text-4xl text-white font-bold mb-8">Hobbies</h2>
            <HobbyItem
              title="Video Games"
              description="Though I don't get to game as much these days, when I do, it's usually in the realm of multiplayer voice chat games. Lately, I've been hooked on SCP Secret Laboratory. You might catch me on Steam as AtlasTerra, but fair warning, I'm not around much these days."
            />
            <HobbyItem
              title="Audiobooks"
              description="I used to be all about reading, but these days I've switched gears to audiobooks. My taste varies wildly, from history to science-fiction, horror, and even autobiographies. Right now, I'm knee-deep in Stephen King's Pet Sematary and before that, I was listening to Eleanor Roosevelt autobiography."
            />
            <HobbyItem
              title="Organized"
              description="When it comes to keeping my digital life in check, I'm all about saving, categorizing, and backing up my stuff on OneDrive. Setting goals and timelines for myself keeps me on track. For example back in early 2023, I splurged on building my own PC—it was a pricey and time-consuming endeavor, but totally worth it for me personally."
            />
          </div>
        </div>
      </section>
    );
  };

export default HobbiesSection;