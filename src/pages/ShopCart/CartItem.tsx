import { CartItem as CartItemType } from "../../types"; // Define CartItem type in src/types.ts

interface CartItemProps {
  item: CartItemType;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

const CartItem = ({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) => {
  return (
    <div className="flex items-center gap-6 mb-6 p-4 border border-gray-200 rounded-lg">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-1">
        <p className="font-medium">{item.name}</p>
        <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={onDecrease}
            className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={onIncrease}
            className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>
      <button onClick={onRemove} className="text-red-500 hover:text-red-700">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
