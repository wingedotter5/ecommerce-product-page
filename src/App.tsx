import Navbar from "./Navbar";
import Product from "./Product";
import { product } from "./data";

const App = () => {
  return (
    <div className="mx-auto max-w-[1440px]">
      <Navbar />
      <Product product={product} />
    </div>
  );
};

export default App;
