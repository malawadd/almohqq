/* eslint @next/next/no-img-element: 0 */
/* eslint jsx-a11y/alt-text: 0 */
"use client";


import clsx from "clsx";


export default function Scene({
    passengers,
    clues,
    complete,
    started,
    working,
  }: {
    passengers: number;
    clues: number;
    complete: boolean;
    working: boolean;
    started: boolean;
  }) {
    // Complete cart!
    if (complete)
      return (
        <>
          <Investigator className="absolute mr-80 -scale-x-100 z-20" thinking={working} win />
          <img className="absolute z-[15] mt-24" src="/express-chairs.png" />
          <img className="absolute z-20 mr-24 mb-56" src="/express-case-closed.gif" />
          <img className="absolute z-20 scale-[.25] ml-32 mb-56" src="/express-confetti.gif" />
          <img className="absolute z-20 scale-[.25] mr-80 mb-56" src="/express-confetti.gif" />
          <img className="absolute z-10 rotate-90 ml-72 mt-8" src="/express-blahaj.gif" />
          <img className="absolute z-10 -scale-x-100 mr-96 mb-40" src="/express-blahaj.gif" />
          <img className="absolute z-20 ml-64 mt-48" src="/express-blahaj.gif" />
          <img className="absolute z-20 scale-[.25] ml-36 mt-36" src="/express-confetti.gif" />
          <img src="/express-cart.gif" /> <img className="z-10" src="/express-cart.gif" /> <img src="/express-cart.gif" />
        </>
      );
  
    // Intro cart
    if (!started)
      return (
        <>
          <Investigator className="absolute z-10" thinking={working} thinkDir="right" />
          <img className="absolute mt-48 ml-64 z-10" src="/express-blahaj.gif" />
          <img className="absolute mr-36 mt-24" src="/express-chairs.png" />
          <img src="/express-cart.gif" /> <img src="/express-cart.gif" /> <img src="/express-cart.gif" />
        </>
      );
  
    //  Crime scene cart
    if (clues < 3)
      return (
        <>
          <Investigator className="absolute ml-64" thinking={working} thinkDir="right" />
          <img className="absolute mr-64 mt-36" src="/express-deado.gif" />
          <img src="/express-cart.gif" /> <img src="/express-cart.gif" /> <img src="/express-cart.gif" />
        </>
      );
  
    // Passengers cart
    if (clues >= 3 && passengers < 2)
      return (
        <>
          <Investigator className="absolute mr-80 mb-8 -scale-x-100 z-10" thinking={working} />
          <img className="absolute ml-12 mb-8 scale-95" src="/express-girls.gif" />
          {/* <img className="absolute ml-96 -scale-x-100" src="/express-guy.gif" /> */}
          {/* <img className="absolute" src="/express-sus.gif" /> */}
          <img src="/express-cart.gif" /> <img src="/express-cart.gif" /> <img src="/express-cart.gif" />
        </>
      );
  
    // bar cart
    return (
      <>
        <Investigator className="absolute mr-80 -scale-x-100 z-10" thinking={working} />
        <img className="absolute z-10 mr-32" src="/express-guy.gif" />
        <img className="absolute ml-[10.5rem] mb-8 scale-105" src="/express-sus.gif" />
        <img src="/express-cart.gif" /> <img src="/express-cart.gif" /> <img src="/express-cart.gif" />
      </>
    );
  }
  
  function Investigator({
    className,
    thinking,
    thinkDir = "left",
    win,
  }: {
    className: string;
    thinking?: boolean;
    thinkDir?: "left" | "right";
    win?: boolean;
  }) {
    return (
      <div className={className}>
        <img
          className={clsx(
            "absolute -left-16 -top-12  transition-opacity duration-250",
            thinking ? "opacity-100" : "opacity-0",
            thinkDir === "left" && "-scale-x-100"
          )}
          src={thinkDir === "left" ? "/express-load.gif" : "/express-load-r.gif"}
        />
        <img src={win ? "/express-toot-win.gif" : "/express-toot.gif"} />
      </div>
    );
  }
  