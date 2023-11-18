import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import React from "react";
import { Grid } from "@mui/material";

const BannerImg = ({ data }) => {
  console.log(data);
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide) => (slide === data.slides.length - 1 ? 0 : slide + 1));
  };

  const prevSlide = () => {
    setSlide((slide) => (slide === 0 ? data.slides.length - 1 : slide - 1));
  };

  return (
    <Grid container>
      <Grid className="carousel" item xs={12} md={12}>
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="arrow arrow-left"
        />
        {Array.isArray(data.slides) &&
          data.slides.map((item, idx) => {
            return (
              <img
                fullWidth
                src={item.src}
                alt={item.alt}
                key={idx}
                className={slide === idx ? "slide" : "slide slide-hidden"}
              />
            );
          })}
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="arrow arrow-right"
        />
        <span className="indicators">
          {Array.isArray(data.slides) &&
            data.slides.map((_, idx) => {
              return (
                <button
                  key={idx}
                  className={
                    slide === idx ? "indicator" : "indicator indicator-inactive"
                  }
                  onClick={() => setSlide(idx)}
                ></button>
              );
            })}
        </span>
      </Grid>
    </Grid>
  );
};

export default BannerImg;
