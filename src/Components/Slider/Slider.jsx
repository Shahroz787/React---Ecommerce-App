import React, { useState } from "react";
import {
  SliderContainer,
  Arrow,
  Wrapper,
  ImageContainer,
  InfoContainer,
  Image,
  Slide,
  Title,
  Desc,
  Button,
} from "./SliderElements";
import { CgArrowRightR } from "react-icons/cg";
import { CgArrowLeftR } from "react-icons/cg";
import { sliderItems } from "./Sliderdata";
import { Link } from "react-router-dom";

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
  };

  return (
    <SliderContainer>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <CgArrowLeftR />
      </Arrow>

      <Wrapper sliderIndex={sliderIndex}>
        {sliderItems.map((Data, index) => (
          <Slide bg={Data.bg} key={index}>
            <ImageContainer>
              <Image src={Data.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{Data.title}</Title>
              <Desc>{Data.desc}</Desc>
              <Button>
                <Link to="/product_list" className="link">
                  SHOW it NOW
                </Link>
              </Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <CgArrowRightR />
      </Arrow>
    </SliderContainer>
  );
};

export default Slider;
