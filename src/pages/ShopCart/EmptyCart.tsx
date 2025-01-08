import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <p>
      Your cart is empty.{" "}
      <Link to="/" className="text-blue-600 hover:underline">
        Continue shopping
      </Link>
      .
    </p>
  );
};

export default EmptyCart;
