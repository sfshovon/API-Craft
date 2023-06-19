import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Modal from "./Modal";

const DeleteProduct = ({ product, setProducts, products }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleDeleteButton = () => {
    setModalOpen(true);
  };

  const handleDeleteProduct = async () => {
    const { id } = product;

    fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("updatedData", data);
        const updatedProducts = products.filter(
          (product) => product?.id !== data?.id
        );
        setProducts(updatedProducts);
        setModalOpen(false);
        toast("Product Has Been Deleted")
      })
      .catch((error) => {
        console.log("Error Deleting product:", error);
      });
  };

  return (
    <>
      <button
        className="px-3 py-2 bg-error text-white rounded-xl text-sm"
        onClick={handleDeleteButton}
      >
        Delete
      </button>
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          title="Delete a Product"
        >
          <div className="mx-8 grid justify-center gap-4 items-center">
            <div className="">
              <h2 className="text-lg">Are You sure to delete this ${product?.title} product?</h2>
            </div>
            <div className="flex gap-2 justify-center">
              <button
                className="px-3 py-2 bg-slate-800 text-white rounded-xl text-sm"
                onClick={() => setModalOpen(false)}
              >
                No
              </button>
              <button
                className="px-3 py-2 bg-error text-white rounded-xl text-sm"
                onClick={handleDeleteProduct}
              >
                Yes
              </button>
            </div>
          </div>
        </Modal>
      )}
      <Toaster/>
    </>
  );
};

export default DeleteProduct;
