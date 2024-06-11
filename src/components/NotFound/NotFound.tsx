import styles from "./NotFound.module.scss"; 
import { NotFoundProps } from "./NotFound.types.ts" 
 
const NotFound = ({}: NotFoundProps) => { 
    return(
        <div className={styles.NotFound}>
            <div>
            <h1>404</h1>
            <p>Page Not Found!</p>
            </div>
            
        </div>
    )
} 
 
export default NotFound 
