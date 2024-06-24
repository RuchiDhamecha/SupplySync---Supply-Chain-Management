import { useState } from "react";
import styles from "./Notification.module.scss";
import { NotificationProps } from "./Notification.types.ts";

const Notification = ({ msg }: NotificationProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.Notification}>
      <p>{msg}</p>
      <button onClick={handleClose} className={styles.CloseBtn}>
        Close
      </button>
    </div>
  );
};

export default Notification;
