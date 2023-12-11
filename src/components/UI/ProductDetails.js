import Image from "next/image";

const ProductDetails = ({ product }) => {
  return (
    <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300 w-[80%]">
      <div className="w-[50%]">
        <Image
          src={product?.image}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
      <div className="w-[50%] space-y-3">
        <h1 className="text-3xl font-semibold">{product?.name}</h1>
        <p className="text-xl">Rating: {product?.rating}</p>
        <ul className="space-y-1 text-lg">
          {product?.features?.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <button className="btn btn-neutral">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetails;
