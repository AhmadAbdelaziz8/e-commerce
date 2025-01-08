// import { CartItem, CartSummary, EmptyCart } from "../ShopCart";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";
// Static mock data for cart items
const staticCartItems = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    quantity: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    price: 49.99,
    quantity: 1,
    image: "https://via.placeholder.com/150",
  },
];

// Static calculations for the cart summary
const subtotal = staticCartItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);
const shipping = 5.99; // Example shipping cost
const tax = subtotal * 0.1; // Example tax (10%)
const total = subtotal + shipping + tax;

const CartPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {staticCartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            staticCartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={() => console.log("Increase quantity")}
                onDecrease={() => console.log("Decrease quantity")}
                onRemove={() => console.log("Remove item")}
              />
            ))
          )}
        </div>

        {/* Order Summary */}
        {staticCartItems.length > 0 && (
          <CartSummary
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            total={total}
          />
        )}
      </div>
    </div>
  );
};

export default CartPage;
