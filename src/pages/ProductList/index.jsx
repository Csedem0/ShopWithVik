import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Img,
  Text,
  Line,
  Button,
  RatingBar,
  PagerIndicator,
  Slider,
} from "components";
import Products from "pages/Homepage/Products";
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

const Container = styled.div``;

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

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0% 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = ({ navBtn, handleMobileMenu }) => {
  const location = useLocation();
  const cat = location?.pathname?.split("/")[2];
  const [sort, setSort] = useState("newest");

  return (
    <Container>
      <div className="bg-gray_50 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-gradient  flex flex-col md:gap-[40px] gap-[70px] items-center justify-start p-[50px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="navbar">
            <header className="flex items-center justify-center w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center w-[100%]">
                <div className="header-row ">
                  <div
                    onClick={handleMobileMenu}
                    className="mobile-menu"
                    data-visible={navBtn}
                  >
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div data-visible={navBtn} className="nav-links">
                  <ul className="flex md:flex-1 sm:flex-col flex-row font-opensans  items-start justify-center md:ml-[0] ml-[107px] md:w-[100%] w-[52%]">
                    <li className="flex items-center justify-start ml-[32px] sm:w-[100%] w-[auto]">
                      <Link to="/">
                        <Text
                          className="not-italic text-red-500 text-opacity-100 text-lg font-bold  text-left w-[auto]"
                          variant="body6"
                        >
                          Home
                        </Text>
                      </Link>
                    </li>
                    <li className="flex items-center justify-start ml-[32px] sm:w-[100%] w-[auto]">
                      <Link to="/shop">
                        <Text
                          className="not-italic text-red-500 text-opacity-100 text-lg font-bold  text-left w-[auto]"
                          variant="body6"
                        >
                          Shop
                        </Text>
                      </Link>
                    </li>
                    <li className="flex items-center justify-start ml-[32px] sm:w-[100%] w-[auto]">
                      <Link to="/aboutus">
                        <Text
                          className="not-italic text-red-500 text-opacity-100 text-lg font-bold  text-left w-[auto]"
                          variant="body6"
                        >
                          Aboutus
                        </Text>
                      </Link>
                    </li>

                    <li className="flex items-center justify-start ml-[32px] sm:w-[100%] w-[auto]">
                      <Link to="/login">
                        <Text
                          className="not-italic text-red-500 text-opacity-100 text-lg font-bold text-left w-[auto]"
                          variant="body6"
                        >
                          Login
                        </Text>
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link to="/login">
                  <Button
                    className="cursor-pointer font-semibold sm:hidden leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-[14px] text-center text-white_A700 w-[auto]"
                    shape="RoundedBorder16"
                    size="md"
                    variant="FillRed400"
                  >
                    Log in
                  </Button>
                </Link>
              </div>
            </header>
          </div>
          <Title className="not-italic text-red-500 text-opacity-100 text-lg font-bold">
            {cat}
          </Title>
          <FilterContainer>
            <Filter>
              <FilterText>Sort Products:</FilterText>
              <Select onChange={(e) => setSort(e.target.value)}>
                <Option value="newest">Newest</Option>
                <Option value="asc">Price (asc)</Option>
                <Option value="desc">Price (desc)</Option>
              </Select>
            </Filter>
          </FilterContainer>
          <Products cat={cat} sort={sort} />
          <footer className=" flex font-raleway items-center justify-center sm:px-[20px] md:px-[40px] px-[75px] py-[50px] w-[100%]">
            <div className="flex flex-1 flex-col gap-[149px] md:gap-[40px] sm:gap-[40px] items-center justify-center w-[100%]">
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                  <Text
                    className="font-raleway not-italic text-red-500 text-opacity-100 text-lg font-bold text-left tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    F
                  </Text>
                  <Text className="font-normal font-rubik leading-[35.00px] md:max-w-[100%] sm:max-w-[100%] max-w-[360px] not-italic text-gray_50_a3 text-left tracking-ls05 md:tracking-ls1 sm:tracking-ls1">
                    Lorem ipsum dolor sit amet litam consectetur adipiscing
                    elit, facilisi vivamus proin lit laoreet phasel alilus
                    porttitor inter, facilisis condiment tarime egestas rhoncus
                    dapibus iaculis alemir.
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
        </div>
      </div>
    </Container>
  );
};

export default ProductList;
