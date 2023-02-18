import Image from "next/legacy/image"
import React from "react"
import Button from "./Button"

function Landing() {
  return (
    <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Off The Road Collective
          </span>
          <br></br>
          <span className="block text-4xl">Hot Trending</span>
          <span className="block text-2xl">Eco Chic Fashion</span>
        </h1>

        <div className="space-x-8">
          <Button title="Buy Now" />
          <a className="link">Learn More</a>
        </div>

        <div className="space-x-8">
          <iframe width="40%" height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&feed=%2FLiza_Dj%2Fcoffee-beats-vol25%2F" frameBorder="0" ></iframe>
        </div>
      </div>

      <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
        <Image src="/otrc_logo_arrow1.png" layout="fill" objectFit="contain" alt={'land_image'}/>
      </div>
    </section>
  );
}

export default Landing;