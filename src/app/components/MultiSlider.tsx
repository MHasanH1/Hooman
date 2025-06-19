"use client";

import React, { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

const MultiSlider = ({
  showDots = true,
  children,
  responsiveItemsNum,
}: {
  showDots?: boolean;
  children: ReactNode;
  responsiveItemsNum?: Array<number>;
}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: responsiveItemsNum?.at(0) || 4,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: responsiveItemsNum?.at(1) || 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: responsiveItemsNum?.at(2) || 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: responsiveItemsNum?.at(3) || 1,
    },
  };
  const styles = `
  .react-multi-carousel-dot-list {
    bottom: -.2rem !important;
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
            className="pb-10"
            // customDot={{ key: "1", props: 1, type: "<div>dsad</div>" }}
          >
            {items.map((item, index) => (
              <div key={index}>{children}</div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default MultiSlider;
