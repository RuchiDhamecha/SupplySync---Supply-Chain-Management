import styles from "./CustRow.module.scss"; 
import { CustRowProps } from "./CustRow.types.ts" 
 
const CustRow = ({customer}: CustRowProps) => { 
    return(
        <div className={styles.Custrow}>
        <h4>{customer.customer_name}</h4>
        <span>{customer.email}</span>
        <span>{customer.mobile_number}</span>
        <span>{customer.address}</span>
      </div>
    )

} 
 
export default CustRow 
