import { useForm } from "react-hook-form";
import { productsDataTypes } from "../../screens/manufacturerScreen/Products/Products.types.ts";
import styles from "./ModalDisAddProduct.module.scss";
import { ModalDisAddProductProps } from "./ModalDisAddProduct.types.ts";

const ModalDisAddProduct = ({
  isOpen,
  onClose,
  onAddProduct,
}: ModalDisAddProductProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<productsDataTypes>();

  const onSubmit = (data: productsDataTypes) => {
    onAddProduct(data);
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.Modal}>
      <div className={styles.InnerModal}>
        <button className={styles.closeBtn} onClick={onClose}>
          X
        </button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGroup}>
            <label>Product Image</label>
            <input
              {...register("product_image", {
                required: "Product image is required",
              })}
            />
            {errors.product_image && (
              <span className={styles.error}>
                {errors.product_image.message}
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>Product Name</label>
            <input
              {...register("product_name", {
                required: "Product name is required",
              })}
            />
            {errors.product_name && (
              <span className={styles.error}>
                {errors.product_name.message}
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>Product Description</label>
            <input
              {...register("product_description", {
                required: "Product description is required",
              })}
            />
            {errors.product_description && (
              <span className={styles.error}>
                {errors.product_description.message}
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>Product Price</label>
            <input
              {...register("product_price", {
                required: "Product price is required",
              })}
            />
            {errors.product_price && (
              <span className={styles.error}>
                {errors.product_price.message}
              </span>
            )}
          </div>
          <button type="submit" className={styles.SubmitBtn}>Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default ModalDisAddProduct;
