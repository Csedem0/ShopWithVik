import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder16: "rounded-[16px]",
  CircleBorder25: "rounded-[25px]",
  RoundedBorder8: "rounded-[8px]",
  RoundedBorder4: "rounded-[4px]",
  RoundedBorder12: "rounded-[12px]",
  RoundedBorder20: "rounded-[20px]",
  icbCircleBorder30: "rounded-[30px]",
  icbRoundedBorder4: "rounded-[4px]",
  icbCircleBorder25: "rounded-[25px]",
};
const variants = {
  FillGray40063: "bg-gray_400_63 text-gray_900",
  FillWhiteA700: "bg-white_A700",
  FillRed400: "bg-red_400 text-white_A700",
  FillGray900: "bg-gray_900 text-white_A700",
  FillGray200: "bg-gray_200 text-black_900",
  FillRed40019: "bg-red_400_19 text-red_400",
  FillWhiteA7007f: "bg-white_A700_7f text-red_400",
  FillIndigo300: "bg-indigo_300 text-white_A700",
  FillRed500: "bg-red_500 text-white_A700",
  FillLightblueA7006c: "bg-light_blue_A700_6c text-indigo_900",
  FillRedA70063: "bg-red_A700_63 text-red_A700",
  OutlineRedA20011: "bg-white_A700 shadow-bs1",
  OutlineGreen50011: "bg-white_A700 shadow-bs2",
  FillBlue400: "bg-blue_400",
  FillGray40064: "bg-gray_400_64 text-gray_900",
  icbFillBluegray100: "bg-bluegray_100",
  icbFillGray200: "bg-gray_200",
  icbFillGray301: "bg-gray_301",
  icbOutlineRed5000f: "bg-white_A700 shadow-bs",
  icbOutlineBlack9000f: "bg-white_A700 shadow-bs3",
  icbFillGray900: "bg-gray_900",
};
const sizes = {
  sm: "p-[9px]",
  md: "p-[14px]",
  lg: "p-[19px]",
  xl: "p-[27px] sm:px-[20px]",
  "2xl": "sm:pl-[20px] pl-[28px] py-[28px]",
  "3xl": "p-[35px] sm:px-[20px]",
  smIcn: "p-[7px]",
  mdIcn: "p-[15px]",
  lgIcn: "p-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder16",
    "CircleBorder25",
    "RoundedBorder8",
    "RoundedBorder4",
    "RoundedBorder12",
    "RoundedBorder20",
    "icbCircleBorder30",
    "icbRoundedBorder4",
    "icbCircleBorder25",
  ]),
  variant: PropTypes.oneOf([
    "FillGray40063",
    "FillWhiteA700",
    "FillRed400",
    "FillGray900",
    "FillGray200",
    "FillRed40019",
    "FillWhiteA7007f",
    "FillIndigo300",
    "FillRed500",
    "FillLightblueA7006c",
    "FillRedA70063",
    "OutlineRedA20011",
    "OutlineGreen50011",
    "FillBlue400",
    "FillGray40064",
    "icbFillBluegray100",
    "icbFillGray200",
    "icbFillGray301",
    "icbOutlineRed5000f",
    "icbOutlineBlack9000f",
    "icbFillGray900",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "smIcn",
    "mdIcn",
    "lgIcn",
  ]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
