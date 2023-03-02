import React from "react";

import { Img, Text, Line, Button, RatingBar } from "components";
import Header from "pages/Homepage/Header";
import Footer from "pages/Homepage/Footer";
import { categories } from "../../data";
import { Link } from "react-router-dom";

const MenuPage = ({ navBtn, handleMobileMenu }) => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-poppins gap-[140px] sm:gap-[40px] md:gap-[40px] items-center justify-end mx-[auto] pt-[51px] w-[100%]">
        <div className="flex flex-col gap-[102px] md:gap-[40px] items-center justify-start max-w-[1112px] mx-[auto] md:px-[20px] w-[100%]">
          <Header navBtn={navBtn} handleMobileMenu={handleMobileMenu} />

          <div className="flex flex-col font-opensans md:gap-[40px] gap-[79px] items-center justify-start w-[100%]">
            <Text
              className="text-gray_900 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              Our Categories
            </Text>
            <div className="flex flex-col font-poppins gap-[50px] items-center justify-start w-[100%]">
              {categories.map((item) => (
                <Link to={`/products/${item.cat}`}>
                  <div className="flex sm:flex-col flex-row gap-[28px] items-center justify-between w-[100%]">
                    <Button
                      className="cursor-pointer font-normal min-w-[192px] text-[20px] not-italic text-[20px] text-center text-gray_900 w-[auto]"
                      shape="RoundedBorder16"
                      size="xl"
                      variant="FillGray40063"
                    >
                      {item.title}
                    </Button>
                  </div>
                </Link>
              ))}
              <div className="flex flex-col gap-[48px] items-center justify-start w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="md:gap-[20px] gap-[35px] grid sm:grid-cols-2 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                      {categories.map((item) => (
                        <Link to={`/products/${item.cat}`}>
                          <div className="bg-white_A700 flex flex-1 flex-col gap-[41px] items-center justify-start p-[30px] sm:px-[20px] rounded-[40px] w-[100%]">
                            <Img
                              src={item.img}
                              className="h-[270px] md:h-[auto] mt-[6px] object-cover w-[270px]"
                              alt="PngItem41084"
                            />
                            <div className="flex flex-col items-center justify-start mb-[6px] w-[100%]">
                              <div className="flex flex-col gap-[18px] items-center justify-start w-[100%]">
                                <Text className="font-semibold text-gray_900 text-left w-[auto]">
                                  {item.title}
                                </Text>
                              </div>

                              <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] md:w-[100%] w-[95%]">
                                <Text
                                  className="font-semibold text-gray_900 text-left w-[auto]"
                                  variant="body1"
                                >
                                  {item.id}
                                </Text>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MenuPage;
