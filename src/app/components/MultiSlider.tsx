"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

const MultiSlider = ({ showDots = true }: { showDots?: boolean }) => {
  const styles = `
  .react-multi-carousel-dot-list {
    bottom: -1rem !important;
    z-index: 99;
  }
  `;
  return (
    <>
      <style>{styles}</style>
      <div>
        <div>
          <Carousel
            responsive={responsive}
            showDots={showDots}
            infinite
            autoPlay
            autoPlaySpeed={2000}
            keyBoardControl
            arrows={false}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="h-40 bg-blue-500 text-white flex items-center justify-center text-xl rounded-lg my-4 mx-2"
              >
                {item}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default MultiSlider;
