import styles from "./RewardsCard.module.scss";
import { RewardsCardProps } from "./RewardsCard.types.ts";
import { useState } from "react";
import { useForm } from "react-hook-form";


const RewardsCard = ({ reward , onUpdate, onDelete}: RewardsCardProps) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      reward_name: reward.reward_name,
      reward_points: reward.points_required,
      reward_description: reward.reward_description,
      reward_image: reward.reward_image,
    },
  });
  const [isEditing, setIsEditing] = useState(false);

  const onSubmit = (data:any) => {
    onUpdate({ ...data, _id: reward._id });
    setIsEditing(false);
  };
  return (
    <div className={styles.RewardsCard}>
      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("reward_name")} />
          <input {...register("reward_points")} />
          <input {...register("reward_description")} />
          <input {...register("reward_image")} />
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
          <img src={reward.reward_image} alt={reward.reward_name} />
          <div className={styles.Flex}>
            <h3>{reward.reward_name}</h3>
            <span>Pts: {reward.points_required}</span>
          </div>
          <div>
            <p>{reward.reward_description}</p>
          </div>
          <div className={styles.Flex}>
            <button
              onClick={() => setIsEditing(true)}
              className={styles.EditSaveBtn}
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(reward._id)}
              className={styles.EditCancelBtn}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RewardsCard;
