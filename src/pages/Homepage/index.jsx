import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Img,
  Text,
  Line,
  Button,
  RatingBar,
  PagerIndicator,
  Slider,
} from "components";
import Header from "./Header";
import Footer from "./Footer";
import Products from "./Products";
import { Link } from "react-router-dom";

const HomepagePage = ({ navBtn, handleMobileMenu }) => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-gradient  flex flex-col md:gap-[40px] gap-[70px] items-center justify-start p-[50px] sm:px-[20px] md:px-[40px] w-[100%]">
          <Header navBtn={navBtn} handleMobileMenu={handleMobileMenu} />
          <div className="flex md:flex-col flex-row md:gap-[40px] gap-[76px] items-center justify-start max-w-[1240px] mb-[20px] mx-[auto] w-[100%]">
            <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[47%]">
              <div className="flex flex-col gap-[36px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="font-opensans text-gray_902 text-left"
                    as="h2"
                    variant="h2"
                  >
                    <span className="md:text-[48px] text-gray_902 text-[70px] font-bold">
                      Best Gadget Shop
                      <br />
                      In{" "}
                    </span>
                    <span className="md:text-[48px] text-red_400 text-[70px] font-inter font-normal not-italic">
                      Town.
                    </span>
                  </Text>
                  <Text
                    className="font-normal font-poppins leading-[40.00px] not-italic text-gray_802 text-left sm:w-[100%] w-[91%]"
                    variant="body2"
                  >
                    We provide best clothes in town and we provide fast home
                    delivery.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-start md:w-[100%] w-[85%]">
                  <Link to="/shop">
                    <Button
                      className="cursor-pointer font-semibold min-w-[232px] text-[20px] text-center text-white_A700 w-[auto]"
                      shape="RoundedBorder16"
                      size="xl"
                      variant="FillRed400"
                    >
                      ALL CATEGORIES
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <Img
              src="images/phone.png"
              className="md:flex-1 h-[550px] sm:h-[auto] object-cover md:w-[100%] w-[48%]"
              alt="illustration"
            />
          </div>
        </div>

        <div className="flex flex-col font-opensans md:gap-[40px] gap-[79px] items-center justify-start max-w-[1112px] mt-[133px] mx-[auto] md:px-[20px] w-[100%]">
          <Text
            className="text-gray_900 text-left w-[auto]"
            as="h3"
            variant="h3"
          >
            Popular Gadgets Now!!!
          </Text>

          <Products />
        </div>

        <div className="bg-red_100 flex font-opensans items-center justify-end max-w-[1112px] mt-[120px] mx-[auto] p-[93px] md:px-[20px] rounded-[24px] w-[100%]">
          <div className="flex flex-col gap-[48px] items-center justify-start mt-[17px] md:w-[100%] w-[77%]">
            <Text
              className="text-gray_900 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              Gadgets? We are open now..
            </Text>
            <div className="flex sm:flex-col flex-row font-poppins gap-[24px] items-center justify-center md:w-[100%] w-[70%]">
              <Link to="/shop">
                <Button
                  className="cursor-pointer font-semibold min-w-[232px] text-[20px] text-center text-white_A700 w-[auto]"
                  shape="RoundedBorder16"
                  size="xl"
                  variant="FillRed400"
                >
                  ALL CATEGORIES
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomepagePage;
