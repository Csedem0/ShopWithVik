import React from "react";

import { Img, Text, Line, Button } from "components";
import Header from "pages/Homepage/Header";
import Footer from "pages/Homepage/Footer";
import { Link } from "react-router-dom";

const AboutusPage = ({ navBtn, handleMobileMenu }) => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-inter gap-[120px] sm:gap-[40px] md:gap-[40px] items-center justify-end mx-[auto] pt-[51px] w-[100%]">
        <div className="flex flex-col items-center justify-start max-w-[1112px] mx-[auto] md:px-[20px] w-[100%]">
          <Header navBtn={navBtn} handleMobileMenu={handleMobileMenu} />
          <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between mt-[78px] w-[100%]">
            <div className="h-[543px] relative sm:w-[100%] w-[543px]">
              <div className="bg-bluegray_100_63 flex h-[100%] sm:h-[auto] items-center justify-start m-[auto] p-[52px] sm:px-[20px] md:px-[40px] rounded-[271px] sm:w-[350px] w-[543px]">
                <div className="bg-bluegray_100_6c h-[437px]  rounded-[218px]  w-[437px]"></div>
              </div>
              <Img
                src="images/img_unsplashebmyh7oo5wy.png"
                className="absolute h-[346px] inset-[0] justify-center  m-[auto] rounded-[50%] w-[346px]"
                alt="unsplasheBmyH7oO5wY"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-[36px] items-start justify-start md:w-[100%] w-[39%]">
              <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                <Text
                  className="font-tinos leading-[57.20px] text-left text-red_400"
                  as="h3"
                  variant="h3"
                >
                  <span className="md:text-[44px] sm:text-[38px] text-gray_902 text-[52px] font-opensans font-bold leading-[normal]">
                    About Our{" "}
                  </span>
                  <span className="md:text-[44px] sm:text-[38px] text-red_400 text-[52px] font-opensans font-bold leading-[normal]">
                    Shop
                  </span>
                </Text>
                <Text
                  className="font-inter font-normal leading-[40.00px] not-italic text-gray_801 text-left w-[100%]"
                  variant="body2"
                >
                  This dish is full of flavor and nutrition! Quinoa is a
                  complete protein, providing all the essential amino acids your
                  body needs, and is also a good source of fiber.
                </Text>
              </div>
              <Link to="/shop">
                <Button
                  className="cursor-pointer font-normal min-w-[232px] not-italic text-[20px] text-center text-white_A700 w-[auto]"
                  shape="RoundedBorder16"
                  size="xl"
                  variant="FillRed400"
                >
                  ALL CATEGORIES
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between mt-[120px] w-[100%]">
            <Text
              className="font-normal leading-[40.00px] md:mt-[0] mt-[120px] not-italic text-gray_801 text-left w-[auto]"
              variant="body2"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </Text>
            <div className="h-[560px] relative sm:w-[100%] w-[560px]">
              <div className="bg-bluegray_100_63 flex h-[100%] sm:h-[auto] items-center justify-start m-[auto] p-[57px] sm:px-[20px] md:px-[40px] rounded-[721px] sm:w-[350px] w-[560px]">
                <div className="bg-bluegray_100_63 h-[445px] rounded-[222px] w-[445px]"></div>
              </div>
              <Img
                src="images/img_unsplash5dszncvdhd0.png"
                className="absolute h-[354px] inset-[0] justify-center m-[auto] rounded-[50%] w-[354px]"
                alt="unsplash5dsZnCVDHdZero"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutusPage;
