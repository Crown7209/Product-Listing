"use client";

import { Card, CreateModal, EditModal } from "@/components/ui";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/products`);
      const responseData = await response.json();
      setProducts(responseData?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const userData = {};
  };

  return (
    <div className="flex justify-center w-full p-6">
      <div className="max-w-[1200px] flex flex-col gap-6">
        <div className="flex justify-end">
          <CreateModal />
        </div>
        <div className="flex justify-between flex-wrap gap-5">
          {products?.map((product) => {
            return <Card key={product?.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}
