import { ISize } from "../../interfaces";

interface Props {
  selectedSize?: ISize;
  sizes: ISize[];
}
export const SizeSelector: React.FC<Props> = ({ selectedSize, sizes }) => {
  return (
    <div>
      <h3 className="font-semibold">Size</h3>
      <div className="flex flex-wrap">
        {sizes.map((size) => (
          <button
            key={size}
            className={`${
              selectedSize === size ? "underline" : ""
            } my-2 mr-6 rounded-lg font-bold `}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
