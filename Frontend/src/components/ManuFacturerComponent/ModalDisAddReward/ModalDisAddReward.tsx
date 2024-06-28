import { useForm } from "react-hook-form";
// import styles from "./ModalDisAddReward.module.scss"; 
import styles from '../../../styles/modal.module.scss'
import { ModalDisAddRewardProps } from "./ModalDisAddReward.types.ts" 
import { RewardsDataType } from "../../../screens/manufacturerScreen/Rewards/Rewards.types.ts";
 
const ModalDisAddReward = ({isOpen, onClose, onAddReward}: ModalDisAddRewardProps) => { 
    const { register, handleSubmit, reset, formState: { errors }} = useForm<RewardsDataType>();

  const onSubmit = (data: RewardsDataType) => {
    onAddReward(data);
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
            <label>reward Image</label>
            <input
              {...register("reward_image", {
                required: "reward image is required",
              })}
            />
            {errors.reward_image && (
              <span className={styles.error}>
                {errors.reward_image.message}
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>reward Name</label>
            <input
              {...register("reward_name", {
                required: "reward name is required",
              })}
            />
            {errors.reward_name && (
              <span className={styles.error}>
                {errors.reward_name.message}
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>reward Description</label>
            <input
              {...register("reward_description", {
                required: "reward description is required",
              })}
            />
            {errors.reward_description && (
              <span className={styles.error}>
                {errors.reward_description.message}
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>Points Required</label>
            <input
              {...register("points_required", {
                required: "reward price is required",
              })}
            />
            {errors.points_required && (
              <span className={styles.error}>
                {errors.points_required.message}
              </span>
            )}
          </div>
          <button type="submit" className={styles.SubmitBtn}>Add reward</button>
        </form>
      </div>
    </div>
  );

} 
 
export default ModalDisAddReward 
