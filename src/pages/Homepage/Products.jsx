import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div``;
const Products = ({ cat, sort }) => {
  const [products, setProducts] = useState([]);
  console.log(cat, sort);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://shopwithvikbackend.onrender.com/api/products?category=${cat}`
            : "https://shopwithvikbackend.onrender.com/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [cat]);

  useEffect(() => {
    if (sort === "newest") {
      setProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <div>
      <div className="flex flex-col font-poppins gap-[50px] items-center justify-start w-[100%]">
        <div className="flex flex-col gap-[48px] items-center justify-start w-[100%]">
          <div className="flex  items-center justify-start w-[100%]">
            <div className="md:gap-[20px] gap-[35px]  flex-row grid sm:grid-cols-2 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
              {cat
                ? products.map((item) => <Product item={item} key={item.id} />)
                : products
                    .slice(0, 15)
                    .map((item) => <Product item={item} key={item.id} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
