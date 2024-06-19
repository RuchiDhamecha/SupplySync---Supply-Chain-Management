import { useState } from "react";
import styles from "./Pagination.module.scss"; 
import { PaginationProps } from "./Pagination.types.ts" 
 
const Pagination = ({}: PaginationProps) => { 
    const [count ,setCount] =useState(1);
    return(
        <div className={styles.Pagination}>
            <span onClick={()=>setCount(count-1)}>p</span>
            <span>{count}</span>
            <span onClick={()=>setCount(count+1)}>n</span>

        </div>
    )
} 
 
export default Pagination 
