import React from "react";

import { Img, Text, Line, Button, Input, TextArea } from "components";
import Header from "pages/Homepage/Header";
import Footer from "pages/Homepage/Footer";

const ContactPage = ({ navBtn, handleMobileMenu }) => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-poppins gap-[120px] sm:gap-[40px] md:gap-[40px] items-center justify-end mx-[auto] pt-[51px] w-[100%]">
        <div className="flex flex-col items-center justify-start max-w-[1112px] mx-[auto] md:px-[20px] w-[100%]">
          <Header navBtn={navBtn} handleMobileMenu={handleMobileMenu} />
          <div className="flex flex-col gap-[19px] items-center justify-start mt-[117px] md:w-[100%] w-[auto]">
            <Text
              className="font-opensans text-gray_900 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              Contact us
            </Text>
            <Text
              className="font-normal font-poppins not-italic text-center text-gray_801 w-[100%]"
              variant="body1"
            >
              We love hearing from our customers. Feel free to share your
              experience or ask any questions you may have below.
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between mt-[50px] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[36px] items-center justify-start md:w-[100%] w-[49%]">
              <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                <Input
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  wrapClassName="w-[100%]"
                  type="text"
                  name="Firstname"
                  placeholder="First name"
                ></Input>
                <Input
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  wrapClassName="w-[100%]"
                  type="text"
                  name="Lastname"
                  placeholder="Last name"
                ></Input>
                <Input
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  wrapClassName="w-[100%]"
                  type="email"
                  name="Emailaddress"
                  placeholder="Email address"
                ></Input>
                <Input
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  wrapClassName="w-[100%]"
                  name="Subject"
                  placeholder="Subject"
                ></Input>
                <TextArea
                  className="font-normal leading-[normal] not-italic text-[16px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  name="Massage"
                  placeholder="Message"
                ></TextArea>
              </div>
              <Button
                className="cursor-pointer font-normal sm:min-w-[100%] min-w-[540px] not-italic sm:text-[21px] md:text-[23px] text-[25px] text-center text-white_A700 w-[auto]"
                shape="RoundedBorder12"
                size="xl"
                variant="FillRed400"
              >
                Submit
              </Button>
            </div>
            <div className="h-[550px] relative md:w-[100%] w-[48%]">
              <Img
                src="images/img_screenshot20220125.png"
                className="h-[550px] m-[auto] object-cover rounded-[24px] w-[100%]"
                alt="ScreenShot20220125"
              />
              <Img
                src="images/img_location.svg"
                className="absolute bottom-[39%] h-[60px] inset-x-[0] mx-[auto] w-[auto]"
                alt="location"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
