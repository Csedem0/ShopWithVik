import {
  Img,
  Text,
  Line,
  Button,
  RatingBar,
  PagerIndicator,
  Slider,
} from "components";
import { Link } from "react-router-dom";

const Header = ({ navBtn, handleMobileMenu }) => {
  return (
    <div className="navbar">
      <header className="flex items-center justify-center w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center w-[100%]">
          <div className="header-row ">
            <div className="logo">
              <Link to="/">A</Link>
            </div>

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
            </ul>
          </div>
          <Link to="/contact">
            <Button
              className="cursor-pointer font-semibold sm:hidden leading-[normal] min-w-[112px] md:ml-[0] ml-[25px] text-[14px] text-center text-white_A700 w-[auto]"
              shape="RoundedBorder16"
              size="md"
              variant="FillRed400"
            >
              CONTACT USS
            </Button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
