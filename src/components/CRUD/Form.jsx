import { useEffect, useState } from "react";

const Form = ({ handlefunction, action, prevProduct }) => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
    description: "",
  });

  useEffect(() => {
    if(prevProduct) {
      const { id, title, price, rating, stock, brand, category, thumbnail, description,
      } = prevProduct;
      setProduct({
        title: title,
        price: price,
        rating: rating,
        stock: stock,
        brand: brand,
        category: category,
        thumbnail: thumbnail,
        description: description,
      });
    }
  }, [])

  const handleAction = async (e) => {
    e.preventDefault();
    await handlefunction(product);
    setProduct({
      title: "",
      price: "",
      rating: "",
      stock: "",
      brand: "",
      category: "",
      thumbnail: "",
      description: "",
    });
  }
  return (
    <div>
      <form className="grid gap-2 px-4">
        <input
          type="text"
          value={product?.title}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
          placeholder="Title"
          className="input border-2 border-gray-200 input-sm w-full"
        />
        <input
          type="text"
          value={product?.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          placeholder="Price"
          className="input border-2 border-gray-200 input-sm w-full"
        />
        <input
          type="text"
          value={product?.rating}
          onChange={(e) => setProduct({ ...product, rating: e.target.value })}
          placeholder="Rating"
          className="input border-2 border-gray-200 input-sm w-full"
        />
        <input
          type="text"
          value={product?.stock}
          onChange={(e) => setProduct({ ...product, stock: e.target.value })}
          placeholder="Stock"
          className="input border-2 border-gray-200 input-sm w-full"
        />
        <input
          type="text"
          value={product?.brand}
          onChange={(e) => setProduct({ ...product, brand: e.target.value })}
          placeholder="Brand"
          className="input border-2 border-gray-200 input-sm w-full"
        />
        <input
          type="text"
          value={product?.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
          placeholder="Category"
          className="input border-2 border-gray-200 input-sm w-full"
        />
        <input
          type="text"
          value={product?.thumbnail}
          onChange={(e) =>
            setProduct({ ...product, thumbnail: e.target.value })
          }
          placeholder="Thumbnail"
          className="input border-2 border-gray-200 input-sm w-full"
        />
        <textarea
          placeholder="Description"
          value={product?.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          className="textarea border-2 border-gray-200 textarea-sm w-full"
        ></textarea>
        <button
          className="px-3 py-2 bg-sky-500 text-white rounded-xl text-sm"
          onClick={(e) => handleAction(e)}
        >
          {action}
        </button>
      </form>
    </div>
  );
};

export default Form;
