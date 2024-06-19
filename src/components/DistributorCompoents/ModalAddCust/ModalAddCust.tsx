import { useForm } from "react-hook-form";
import styles from "./ModalAddCust.module.scss"; 
import { ModalAddCustProps } from "./ModalAddCust.types.ts" 
import {  CustomersDataTypesD } from "../../../screens/distributorScreen/Customers/Customers.types.ts";
 
const ModalAddCust = ({isOpen, onClose, onAddCustomer}: ModalAddCustProps) => { 
    const { register, handleSubmit, reset, formState: { errors }} = useForm<CustomersDataTypesD>();

  const onSubmit = (data: CustomersDataTypesD) => {
    onAddCustomer(data);
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
            <label>customer name</label>
            <input
              {...register("customer_name", {
                required: "customer name is required",
              })}
            />
            {errors.customer_name && (
              <span className={styles.error}>
                {errors.customer_name.message}
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>customer email</label>
            <input
              {...register("email", {
                required: "customer email is required",
              })}
            />
            {errors.email && (
              <span className={styles.error}>
                {errors.email.message}
              </span>
            )}
          </div>
         
          <div className={styles.formGroup}>
            <label>Mobile No</label>
            <input
              {...register("mobile_number", {
                required: "mobile_number is required",
              })}
            />
            {errors.mobile_number && (
              <span className={styles.error}>
                {errors.mobile_number.message}
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>City</label>
            <input
              {...register("address", {
                required: "City is required",
              })}
            />
            {errors.address && (
              <span className={styles.error}>
                {errors.address.message}
              </span>
            )}
          </div>
          <button type="submit" className={styles.SubmitBtn}>Add customer</button>
        </form>
      </div>
    </div>
  );
} 
 
export default ModalAddCust 
