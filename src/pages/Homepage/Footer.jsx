import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Room,
  Twitter,
  WhatsApp,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { Img, Text, Line, Button, RatingBar } from "components";
import { Link } from "react-router-dom";

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Footer = () => {
  return (
    <footer className=" flex font-raleway items-center justify-center sm:px-[20px] md:px-[40px] px-[75px] py-[50px] w-[100%]">
      <div className="flex flex-1 flex-col gap-[149px] md:gap-[40px] sm:gap-[40px] items-center justify-center w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
          <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
            <Text
              className="font-raleway not-italic text-red-500 text-opacity-100 text-lg font-bold text-left tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h4"
              variant="h4"
            >
              <Img
                src="images/img_logo.svg"
                className="cursor-pointer h-[51px]"
                alt="Logo One"
              />
            </Text>
            <Text className="font-normal font-rubik leading-[35.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[360px] not-italic text-gray_50_a3 text-left tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
              Lorem ipsum dolor sit amet litam consectetur adipiscing elit,
              facilisi vivamus proin lit laoreet phasel alilus porttitor inter,
              facilisis condiment tarime egestas rhoncus dapibus iaculis alemir.
            </Text>
          </div>
          <div className="flex flex-col gap-[20px] items-start justify-start w-[209px]">
            <Text
              className="font-normal not-italic text-red-500 text-opacity-100 text-lg font-bold text-left tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h6"
              variant="h6"
            >
              Customer
            </Text>
            <ul className="flex flex-col font-rubik gap-[24px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto] common-column-list">
              <li className="w-[auto]">
                <Link to="/login">
                  <Text
                    className="cursor-pointer font-normal not-italic text-gray_50_a3 text-left tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                    variant="body3"
                  >
                    Order Status
                  </Text>
                </Link>
              </li>

              <li className="w-[auto]">
                <Link to="/login">
                  <a className="cursor-pointer font-normal not-italic text-[14px] text-gray_50_a3 text-left tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                    Affiliate
                  </a>
                </Link>
              </li>

              <li className="w-[auto]">
                <Link to="/login">
                  <a className="cursor-pointer font-normal not-italic text-[14px] text-gray_50_a3 text-left tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                    Security
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[20px] items-start justify-start w-[209px]">
            <Text
              className="font-normal not-italic text-red-500 text-opacity-100 text-lg font-bold text-left tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h6"
              variant="h6"
            >
              Information
            </Text>
            <ul className="flex flex-col font-rubik gap-[24px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto] common-column-list">
              <li className="w-[auto]">
                <Link to="/login">
                  <Text
                    className="cursor-pointer font-normal not-italic text-gray_50_a3 text-left tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                    variant="body3"
                  >
                    Customer Service
                  </Text>
                </Link>
              </li>
              <li className="w-[auto]">
                <Link to="/login">
                  <a
                    className="cursor-pointer font-normal not-italic text-[14px] text-gray_50_a3 text-left tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                    href="#"
                  >
                    Careers
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[20px] items-start justify-start w-[220px]">
            <Text
              className="font-normal not-italic text-red-500 text-opacity-100 text-lg font-bold text-left tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h6"
              variant="h6"
            >
              Follow Us
            </Text>
            <SocialContainer>
              <a href="https://www.facebook.com/sobulachi.junior/">
                <SocialIcon color="000000">
                  <Facebook />
                </SocialIcon>
              </a>
              <a href="https://twitter.com/Emmanuel444555?t=UlaLXcHA943urmfRjb10mg&s=09">
                <SocialIcon color="000000">
                  <Twitter />
                </SocialIcon>
              </a>
              <a href="https://www.linkedin.com/in/emmanuel-chukwu-3a4546243">
                <SocialIcon color="000000">
                  <LinkedIn />
                </SocialIcon>
              </a>
              <a href="https://wa.me/09159816020">
                <SocialIcon color="000000">
                  <WhatsApp />
                </SocialIcon>
              </a>
            </SocialContainer>
          </div>
        </div>
        <div className="flex sm:flex-col flex-row font-rubik md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
          <Text className="font-normal not-italic text-gray_50_a3 text-left tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]">
            © Copyright 2023 Cse. All Rights Reserved.
          </Text>
          <div className="flex flex-row gap-[41px] items-start justify-start w-[272px]">
            <Text className="flex-1 font-normal not-italic text-gray_50_a3 text-left tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]">
              Terms of condition
            </Text>
            <Text className="font-normal not-italic text-gray_50_a3 text-left tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]">
              Privacy Policy
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
