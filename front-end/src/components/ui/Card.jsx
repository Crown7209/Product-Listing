import { DeleteButton, EditModal } from ".";

export const Card = ({ product }) => {
  const { productName, category, price } = product

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <div className="flex justify-between">
          <p>{category}</p>
          <p>{price}</p>
        </div>
      </div>
      <div className="card-actions justify-end p-4 pt-0">
        <EditModal product={product}/>
        <DeleteButton />
      </div>
    </div>
  );
};
