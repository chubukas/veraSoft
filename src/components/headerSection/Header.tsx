import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import {useDispatch} from "react-redux"

import styles from './Header.module.css';
import {handlePageStatus} from "../../features/slices/OrderSlice"


 
const Header = (props: any) => {
  
  const dispatch = useDispatch()

 const onclicks = () => {
    dispatch(handlePageStatus(true))
  }
  
  return (
      <>
        <header className={styles.header}>      
          <div className={styles.name}>
            <p>
           <FontAwesomeIcon  icon={faStar} size="1x"></FontAwesomeIcon>
                {props?.names}
            </p>
          </div>
          <div className={styles.divButton}>
            <button onClick={() => onclicks()} className={styles.button}>New Order</button>
          </div>
        </header>
     
      </>
  );
}
 
export default Header;