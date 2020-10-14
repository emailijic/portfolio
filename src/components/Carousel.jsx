import React, { useState, useEffect, useRef } from "react";
import { TweenLite, Power3 } from "gsap";
import styled from "styled-components";
import { ReactComponent as LeftArrow } from "../assets/carousel/left-arrow.svg";
import { ReactComponent as RightArrow } from "../assets/carousel/right-arrow.svg";

let artWork = [
  {
    name: "Ready vet",
    title: "",
    testimonials: "Booking System for Veterinarians",
    image: `${require("../assets/carousel/ready-vet.png")}`,
    link: "",
  },
  {
    name: "Jobify",
    title: "",
    testimonials:
      "Application for finding everyday tasks such as repairing a computer, walking someone's dog, babysitting, mowing the lawn and other similar tasks in the user's environment.",
    image: `${require("../assets/carousel/jobify (2).png")}`,
    link: "",
  },
  {
    name: "One Chat",
    title: "",
    testimonials:
      "Onechat is a multi-mixed messaging platform. An Ad-free platform where people can communicate with friends in a free and secure way",
    image: `${require("../assets/carousel/onechat.png")}`,
    link: "https://www.ochat.nl/",
  },
];

const Carousel = () => {
  let testimonialsRef = useRef(null);
  let nameRef = useRef(null);
  let titleRef = useRef(null);
  let pictureRef = useRef(null);

  const [params, setParams] = useState({
    activeIndex: 0,
    artWorkLength: artWork.length,
  });

  const [animationSettings, setAnimationSettings] = useState({ x: 0 });
  const [hasChanged, setHasChanged] = useState(false);

  let index = params.activeIndex;

  const previous = () => {
    let totalArtwork = params.artWorkLength;
    index < 1 ? (index = totalArtwork - 1) : index--;
    setHasChanged(true);
    setParams({ ...params, activeIndex: index });
  };

  const next = () => {
    let totalArtwork = params.artWorkLength;
    index === totalArtwork - 1 ? (index = 0) : index++;
    setHasChanged(true);
    setParams({ ...params, activeIndex: index });
  };

  const artwork = artWork[params.activeIndex];

  return (
    <X>
      <Slider>
        <ArrowLeft onClick={previous} />
        <Inner>
          <TileContainer>
            <Tile
              ref={(element) => {
                pictureRef = element;
              }}
              src={artwork.image}
              alt={artwork.title}
            ></Tile>
          </TileContainer>
          <Content>
            <Item>
              <Testimonials
                ref={(element) => {
                  testimonialsRef = element;
                }}
              >
                {artwork.testimonials}
              </Testimonials>

              <Name
                ref={(element) => {
                  nameRef = element;
                }}
              >
                {artwork.name}
              </Name>
              <Title
                ref={(element) => {
                  titleRef = element;
                }}
              >
                {artwork.title}{" "}
              </Title>
            </Item>
          </Content>
        </Inner>
        <ArrowRight onClick={next} />
      </Slider>
    </X>
  );
};

export default Carousel;

//GENERAL SLIDER
const X = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 500px;
  padding-top: 1.5rem;
`;

const Slider = styled.div`
  display: flex;

  @media (max-width: 580px) {
    position: relative;
  }
`;

//ARROWS
const ArrowLeft = styled(LeftArrow)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 460px;
  width: 75px;
  top: 0;
  left: 0;
  cursor: pointer;
  transition: 0.3s ease-ease-in-out;

  @media (max-width: 580px) {
    position: absolute;
    height: 55px;
    width: 55px;
    top: unset;
    bottom: 5%;
    left: 20%;
  }
`;

const ArrowRight = styled(RightArrow)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 460px;
  width: 75px;
  top: 0;
  right: 0;
  cursor: pointer;
  transition: 0.3s ease-ease-in-out;

  @media (max-width: 580px) {
    position: absolute;
    height: 55px;
    width: 55px;
    top: unset;
    bottom: 5%;
    right: 20%;
  }
`;

//INNER CONTENT
const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 28rem 0 2rem;
  transition: all 0.3s;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0 3rem;
    transition: all 0.3s;
  }

  @media (max-width: 580px) {
  }
`;

// IMAGES
const TileContainer = styled.div`
  box-shadow: 0px 0px 40px rgba(0, 0, 10, 0.25);
  display: flex;
  overflow: hidden;
  height: 460px;
  width: 100%;
  border-radius: 10px;

  @media (max-width: 580px) {
    width: 300px;
  }
`;

const Tile = styled.img`
  height: 100%;
`;

//  TEXT CONTENT
const Content = styled.div`
  display: flex;
`;

const Item = styled.div`
  position: absolute;
  margin: 0 0 0 4rem;
  transition: all 0.3s;
  width: 340px;
  text-align: justify;

  @media (max-width: 992px) {
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.3s;
  }

  @media (max-width: 580px) {
    width: 300px;
  }
`;

const Testimonials = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

const Name = styled.div`
  color: #a1a1a8;
  font-size: 17px;
  font-weight: 600;
`;

const Title = styled.div`
  font-size: 15px;
  color: #a1a1a8;
`;
