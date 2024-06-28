import { useState } from "react";
import styles from "./ProductsCard.module.scss";
import { productsDataTypes } from "../../../screens/manufacturerScreen/Products/Products.types";
import { ProductsCardProps } from "./ProductsCard.types";
import { useForm } from "react-hook-form";

const ProductsCard = ({ product, onUpdate, onDelete }: ProductsCardProps) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      product_name: product.product_name,
      product_price: product.product_price,
      product_description: product.product_description,
      product_image: product.product_image,
    },
  });

  const [isEditing, setIsEditing] = useState(false);

  const onSubmit = (data:any) => {
    onUpdate({ ...data, _id: product._id });
    setIsEditing(false);
  };

  return (
    <div className={styles.ProductsCard}>
      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("product_name")} />
          <input {...register("product_price")} />
          <input {...register("product_description")} />
          <input {...register("product_image")} />
          <div className={styles.Flex}>
          <button
              className={styles.EditCancelBtn}
              onClick={() => setIsEditing(true)}
            >
              Cancel
            </button>
            <button type="submit" className={styles.EditSaveBtn}>
              Save
            </button>
           
          </div>
        </form>
      ) : (
        <div>
          <img src={product.product_image} alt={product.product_name} />
          <div className={styles.Flex}>
            <h3>{product.product_name}</h3>
            <span>Rs: {product.product_price}</span>
          </div>
          <div>
            <p>{product.product_description}</p>
          </div>
          <div className={styles.Flex}>
            <button onClick={() => setIsEditing(true)} className={styles.EditSaveBtn}>Edit</button>
            <button onClick={() => onDelete(product._id)} className={styles.EditCancelBtn}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsCard;
