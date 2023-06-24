import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Form from "./Form";
import Modal from "./Modal";

const AddProduct = ({ products, setProducts }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleAddButton = () => {
    setModalOpen(true);
  };

  const handleAddProduct = async (product) => {
    const { title, price, rating, stock, brand, category, thumbnail, imageUrl, description,
    } = product;

    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        price: parseFloat(price),
        rating: parseFloat(rating),
        stock: parseInt(stock),
        brand: brand,
        category: category,
        thumbnail: thumbnail,
        description: description,
        images: [imageUrl],
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      // console.log("data", data);
      setProducts([...products, data]);
      setModalOpen(false);
      toast("Product Has Been Added")
    })
    .catch((error) => {
      console.error("Error adding product:", error);
    });
  };

  return (
    <>
      <button className="px-3 py-2 bg-sky-400 text-white rounded-xl text-sm" onClick={handleAddButton}>Add Product</button>
      {
        modalOpen && (
          <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} title="Add a Product">
            <Form handlefunction={handleAddProduct} action="Add"/>
          </Modal>
        )
      }
    <Toaster/>
    </>
  );
};

export default AddProduct;
