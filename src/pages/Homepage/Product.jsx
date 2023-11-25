import { Img, Text, Line, Button, RatingBar } from "components";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <div>
      <div className=" flex flex-1 flex-col gap-[41px] items-center justify-start p-[30px] sm:px-[20px] rounded-[40px] w-[100%]">
        <Link to={`/product/${item._id}`}>
          <Img
            src={item.img}
            className="h-[270px] md:h-[auto] mt-[6px] object-cover w-[270px]"
            alt="PngItem41084"
          />
        </Link>
        <div className="flex flex-col items-center justify-start mb-[6px] w-[100%]">
          <div className="flex flex-col gap-[18px] items-center justify-start w-[100%]">
            <Text className="font-sans text-lg text-gray_900 text-left w-[auto]">
              {item.title}
            </Text>
          </div>

          <div className="flex flex-row gap-[34px] items-center justify-between mt-[30px] md:w-[100%] w-[95%]">
            <Text className=" text-gray_900 text-left w-[auto]">
              ₦{item.price}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
