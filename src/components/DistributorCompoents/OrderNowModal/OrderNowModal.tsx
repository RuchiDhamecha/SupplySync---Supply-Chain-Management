import { useForm } from "react-hook-form";
import styles from "./OrderNowModal.module.scss";
import { OrderNowModalProps } from "./OrderNowModal.types.ts";

interface FormData {
  quantity: number;
}

const OrderNowModal = ({
  isOpen,
  onClose,
  onSubmit,
  product,
}: OrderNowModalProps) => {
  const { register, handleSubmit, getValues } = useForm<FormData>({
    defaultValues: { quantity: 1 },
  });

  if (!isOpen) return null;

  const calculateTotalPrice = () => {
    const { quantity } = getValues();
    return (product.product_price * quantity).toFixed(2);
  };

  return (
    <div className={styles.OrderNowModalOverlay}>
      <div className={styles.OrderNowModal}>
        <h2>Order Now</h2>
        <button onClick={onClose} className={styles.CloseBtn}>
          Close
        </button>
        <form
          onSubmit={handleSubmit((data) =>
            onSubmit({
              product_name: product.product_name,
              product_price: product.product_price,
              quantity: data.quantity,
            })
          )}
        >
          <div className={styles.FormGroup}>
            <label>Product Name</label>
            <p>{product.product_name}</p>
          </div>
          <div className={styles.FormGroup}>
            <label>Product Price</label>
            <p>{product.product_price}</p>
          </div>
          <div className={styles.FormGroup}>
            <label>Quantity</label>
            <input
              type="number"
              {...register("quantity", { valueAsNumber: true })}
              min="1"
            />
          </div>
          <div className={styles.FormGroup}>
            <label>Total Price</label>
            <p>{calculateTotalPrice()}</p>
          </div>
          <div className={styles.ButtonGroup}>
            <button type="submit" className={styles.SubmitBtn}>
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className={styles.CancelBtn}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderNowModal;
