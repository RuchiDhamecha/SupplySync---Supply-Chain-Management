import { useEffect, useState } from "react";
import styles from "./Products.module.scss";
import { ProductsProps } from "./Products.types";
import { productsDataTypes } from "./Products.types";
import ProductsCard from "../../../components/ProductsCard/ProductsCard";
import { createProduct, deleteProduct, updateProduct} from "../../../auth/manuProducts";
import { productsScreen } from "../../../auth/distProducts.instance";
import ModalDisAddProduct from "../../../components/ModalDisAddProduct/ModalDisAddProduct";

const Products = ({}: ProductsProps) => {
  const [products, setProducts] = useState<productsDataTypes[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getdata = async () => {
    try {
      const productsScreenResponse = await productsScreen();
      setProducts(productsScreenResponse.data);
    } catch (error: any) {
      console.log("error", error.message);
    }
  };

  const handleUpdateProduct = async (updatedProduct: productsDataTypes) => {
    try {
      await updateProduct(updatedProduct);
      setProducts(
        products.map((product) =>
          product._id === updatedProduct._id ? updatedProduct : product
        )
      );
    } catch (error: any) {
      console.log("Update error", error.message);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    try {
      await deleteProduct(productId);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error: any) {
      console.log("Delete error", error.message);
    }
  };

  const handleAddProduct = async (newProduct: productsDataTypes) => {
    try {
      const response = await createProduct(newProduct);
      setProducts([...products, response.data]);
    } catch (error: any) {
      console.log("Add error", error.message);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div className={styles.AddBtn}>

      <button onClick={() => setIsModalOpen(true)} >+ ADD PRODUCT</button>
      </div>
      <div className={styles.ProductsScreen}>
        {products.map((productItem) => (
          <ProductsCard
            key={productItem._id}
            product={productItem}
            onUpdate={handleUpdateProduct}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
       <ModalDisAddProduct
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default Products;
