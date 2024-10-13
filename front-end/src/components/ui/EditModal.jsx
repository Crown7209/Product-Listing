"use-client";

import { BACKEND_ENDPOINT } from "@/constants/constant";
import { useState } from "react";

export const EditModal = ({ product: productProps }) => {
  //product: productProps => propsiin ner solih
  const [product, setProduct] = useState(productProps);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    };

    await fetch(`${BACKEND_ENDPOINT}/product`, options);
    document.getElementById("my_modal_2").close();
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        [name]: value,
      };
    });
  };

  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Edit
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit product</h3>
          <p className="py-4">Edit hiih</p>
          <div className="flex flex-col gap-3 mt-4">
            <input
              name="productName"
              onChange={handleInputChange}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              value={product?.productName}
            />
            <input
              name="category"
              onChange={handleInputChange}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              value={product?.category}
            />
            <input
              name="price"
              onChange={handleInputChange}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              value={product?.price}
            />
          </div>

          <button className="btn mt-4" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </dialog>
    </>
  );
};
