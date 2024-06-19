import { useForm } from "react-hook-form";
import styles from "./CustRowD.module.scss";
import { CustRowDProps } from "./CustRowD.types.ts";
import { useState } from "react";

const CustRowD = ({ customer, onUpdate, onDelete }: CustRowDProps) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      customer_name: customer.customer_name,
      email: customer.email,
      mobile_number: customer.mobile_number,
      address: customer.address,
    },
  });

  const [isEditing, setIsEditing] = useState(false);

  const onSubmit = (data: any) => {
    onUpdate({ ...data, _id: customer._id });
    setIsEditing(false);
  };

  return (
    <div className={styles.customersCard}>
      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("customer_name")} />
          <input {...register("email")} />
          <input {...register("mobile_number")} />
          <input {...register("address")} />
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
        <div className={styles.Customer}>
          <h3>{customer.customer_name}</h3>

          <p>{customer.mobile_number}</p>

          <p>{customer.email}</p>

          <p>{customer.address}</p>

          <button
            onClick={() => setIsEditing(true)}
            className={styles.EditSaveBtn}
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(customer._id)}
            className={styles.EditCancelBtn}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default CustRowD;
