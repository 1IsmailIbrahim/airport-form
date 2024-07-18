import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

interface ProductCardProps {
  imageSrc?: string;
  title: string;
  price: string;
  hint: string;
  description: string;
}

const ProductCard = ({
  imageSrc = "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/01/19.jpg",
  title,
  price,
  hint,
  description,
}: ProductCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedDescription =
    description.length > 103
      ? `${description.substring(0, 103)}...`
      : description;

  return (
    <div className="flex flex-col md:flex-row border rounded-sm shadow-md">
      <img
        className="w-full md:w-1/3 h-auto rounded-md object-cover"
        src={imageSrc}
        alt={title}
      />
      <div className="flex flex-col justify-between p-4 md:w-2/3 space-y-4">
        <div>
          <p className="text-base capitalize font-semibold">{title}</p>
          <p className="text-lg font-semibold">{price}</p>
          <p className="text-gray-600 m-0 text-sm">{hint}</p>
        </div>
        <div className="grid grid-cols-12">
          <InputText
            className="p-inputtext-sm w-full col-span-3"
            placeholder="Quantity"
            defaultValue={1}
          />
        </div>
        <div className="grid grid-cols-12">
          <Button
            label="Add to cart"
            className="bg-[#0142a2] py-2 px-5 m-0 w-full col-span-12 md:col-span-6"
          />
        </div>
        <p className="text-gray-700 m-0 pt-3 text-sm col-span-12 truncated-text">
          {isExpanded ? description : truncatedDescription}
          {description.length > 103 && (
            <button
              onClick={handleToggle}
              className="text-blue-500 hover:underline ml-2"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
