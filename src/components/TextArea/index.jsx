import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  OutlineGray400: "bg-white_A700 border-[1px] border-gray_400 border-solid",
};
const shapes = { RoundedBorder8: "rounded-[8px]" };
const sizes = {
  sm: "pb-[35px] pt-[16px] px-[16px]",
  md: "pb-[35px] pl-[16px] sm:pr-[20px] pr-[22px] pt-[22px]",
  lg: "pb-[35px] pl-[24px] pr-[30px] pt-[30px] sm:px-[20px]",
};

const TextArea = React.forwardRef(
  (
    {
      className,
      name,
      placeholder,
      children,
      shape,
      variant,
      size,
      errors,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={`${className} ${shapes[shape] || ""} ${
            sizes[size] || ""
          } ${variants[variant] || ""}`}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  }
);

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder8"]),
  variant: PropTypes.oneOf(["OutlineGray400"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

TextArea.defaultProps = {
  className: "",
  name: "",
  placeholder: "",
  shape: "RoundedBorder8",
  variant: "OutlineGray400",
  size: "lg",
};
export { TextArea };
