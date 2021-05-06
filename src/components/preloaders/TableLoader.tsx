import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"

import style from "./PreLoader.module.css";
 
const TableLoader = () => {
  return (
    <div className={style.EllipsisH}>
      <FontAwesomeIcon icon={faEllipsisH} size="3x"></FontAwesomeIcon>
    </div>
   );
}
 
export default TableLoader;