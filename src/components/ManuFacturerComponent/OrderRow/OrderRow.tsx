import styles from "./OrderRow.module.scss";
import { OrderRowProps } from "./OrderRow.types.ts";

const OrderRow = ({
  order,
  onAccept,
  onReject,
  showActions,
}: OrderRowProps) => {
    console.log(order);
  return (
    <tbody className={styles.OrderRow}>
      <tr key={order._id}>
        <td>{order.order_date}</td>
        <td>{order.order_total_price}</td>
        
        {/* <td>{order.products[0].quantity}||24</td> */}
        {/* <td>{order.products[0].product_price}</td>
        <td>{order.products[0].product_name}</td> */}
        {showActions && (
          <td>
            <button
              onClick={() => onAccept(order._id)}
              className={styles.GreenBtn}
            >
              Accept
            </button>
            <button
              onClick={() => onReject(order._id)}
              className={styles.RedBtn}
            >
              Reject
            </button>
          </td>
        )}
      </tr>
    </tbody>
  );
};

export default OrderRow;
