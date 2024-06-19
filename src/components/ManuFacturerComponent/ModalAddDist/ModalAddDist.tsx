import { useForm } from "react-hook-form";
import { DistributorsDataTypes } from "../../../screens/manufacturerScreen/Distributors/Distributors.types.ts";
// import styles from "./ModalAddDist.module.scss"; 
import styles from "../../../styles/modal.module.scss";
import { ModalAddDistProps } from "./ModalAddDist.types.ts" 
 
const ModalAddDist = ({isOpen, onClose, onAddDistributor}: ModalAddDistProps) => { 
    const { register, handleSubmit, reset, formState: { errors }} = useForm<DistributorsDataTypes>();

    const onSubmit = (data: DistributorsDataTypes) => {
      onAddDistributor(data);
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
              <label>Distributor Name</label>
              <input
                {...register("user_name", {
                  required: "distributor name is required",
                })}
              />
              {errors.user_name && (
                <span className={styles.error}>
                  {errors.user_name.message}
                </span>
              )}
            </div>
            <div className={styles.formGroup}>
              <label>email</label>
              <input
                {...register("email", {
                  required: "email is required",
                })}
              />
              {errors.email && (
                <span className={styles.error}>
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className={styles.formGroup}>
              <label>Mobile No. :</label>
              <input
                {...register("mobile_number", {
                  required: "Mobile no. : is required",
                })}
              />
              {errors.mobile_number && (
                <span className={styles.error}>
                  {errors.mobile_number.message}
                </span>
              )}
            </div>
           
            <div className={styles.formGroup}>
              <label>Adress:</label>
              <input
                {...register("address", {
                  required: "Adress: is required",
                })}
              />
              {errors.address && (
                <span className={styles.error}>
                  {errors.address.message}
                </span>
              )}
            </div>
            <div className={styles.formGroup}>
              <label>Points :</label>
              <input
                {...register("points", {
                  required: "Points : is required",
                })}
              />
              {errors.points && (
                <span className={styles.error}>
                  {errors.points.message}
                </span>
              )}
            </div>
            <button type="submit" className={styles.SubmitBtn}>Add Distributor</button>
          </form>
        </div>
      </div>
    )
} 
 
export default ModalAddDist 
