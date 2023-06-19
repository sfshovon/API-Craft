import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Form from "./Form";
import Modal from "./Modal";

const EditProduct = ({ prevProduct, setProducts, products }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleEditButton = () => {
    setModalOpen(true);
  };

  const handleEditProduct = async (product) => {
    const { title, price, rating, stock, brand, category, thumbnail, description,
    } = product;

    fetch(`https://dummyjson.com/products/${prevProduct?.id}`, {
      method: "PUT",
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
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("updatedData", data);
        const index = products.findIndex((product) => product.id === data.id);
        const updatedProducts = [...products];
        updatedProducts[index] = data;
        setProducts(updatedProducts);
        setModalOpen(false);
        toast("Product Has Been Updated")
      })
      .catch((error) => {
        console.log("Error updating product:", error);
      });
  };

  return (
    <>
      <button
        className="px-3 py-2 bg-gray-300 rounded-xl text-sm"
        onClick={handleEditButton}
      >
        Edit
      </button>
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          title="Update a Product"
        >
          <Form
            handlefunction={handleEditProduct}
            action="Update"
            prevProduct={prevProduct}
          ></Form>
        </Modal>
      )}
      <Toaster/>
    </>
  );
};

export default EditProduct;
