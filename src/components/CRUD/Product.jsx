import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";

const Product = ({ product, products, setProducts }) => {
  const { title, price, thumbnail } = product;
  return (
    <>
      <div className="card shadow-xl col-span-12 md:col-span-6 lg:col-span-4">
        <figure className="px-10 pt-10 h-48">
          <img src={thumbnail} alt="Product" className="rounded-xl h-full"/>
        </figure>
        <div className="card-body h-auto">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions grid grid-cols-2 items-center">
            <div className="flex gap-2 justify-start ">
              <span className="text-gray-500 ">${price}</span>
            </div>
            <div className="justify-end flex gap-2">
              <EditProduct prevProduct={product} setProducts={setProducts} products={products}/>
              <DeleteProduct product={product} setProducts={setProducts} products={products}/>
            </div>
          </div>
        </div>
      </div>      
    </>
  );
};

export default Product;