import { useState } from "react";
import styles from "./DistRow.module.scss";
import { DistRowProps } from "./DistRow.types.ts";
import { useForm } from "react-hook-form";

const DistRow = ({ distributor, onUpdate, onDelete }: DistRowProps) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      user_name: distributor.user_name,
      email: distributor.email,
      mobile_number: distributor.mobile_number,
      address: distributor.address,
      points: distributor.points,
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const onSubmit = (data: any) => {
    onUpdate({ ...data, _id: distributor._id });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.Edit}>
          <input {...register("user_name")} />
          <input {...register("email")} />
          <input {...register("mobile_number")} />
          <input {...register("address")} />
          <input {...register("points")} />
          <button
            className={styles.EditCancelBtn}
            onClick={() => setIsEditing(true)}
          >
            Cancel
          </button>
          <button type="submit" className={styles.EditSaveBtn}>
            Save
          </button>
        </form>
      ) : (
        <div className={styles.Distrow}>
          <h4>{distributor.user_name}</h4>
          <span>{distributor.email}</span>
          <span>{distributor.mobile_number}</span>
          <span>{distributor.address}</span>
          <span>{distributor.points}</span>
          <button
            onClick={() => setIsEditing(true)}
            className={styles.EditSaveBtn}
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(distributor._id)}
            className={styles.EditCancelBtn}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default DistRow;
