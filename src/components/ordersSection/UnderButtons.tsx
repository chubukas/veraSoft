import { useState } from "react";
import { useDispatch } from "react-redux"

import {errorButtonAction,fetchOrders} from "../../features/slices/OrderSlice"
 
const UnderButtons = (props: any) => {
  const { desing, roundButton, normalButton } = props
  
  const checks: string[] = ["send","error"]

  const [changeButton, setChangeButton] = useState(false);

  const dispatch = useDispatch()

  const onclicks = (e:React.MouseEvent, checks:string) => {
    e.preventDefault()
    setChangeButton(!changeButton)

    checks === "error" ? dispatch(errorButtonAction(true)) : dispatch(errorButtonAction(false))
    
    checks === "send" && dispatch(fetchOrders())
    
  }

  return (
    
    <div className={desing}>
      <div>
        <button disabled={!changeButton}
          onClick={(e) => onclicks(e, checks[0])}
          className={changeButton ? normalButton : roundButton}>
          SENT
        </button>
        <button disabled={changeButton}
          onClick={(e) => onclicks(e, checks[1])}
          className={changeButton ? roundButton : normalButton}>
          ERRORS
        </button>
      </div>
      <div>
       <span>RECENT ORDERS</span> 
      </div>   
    </div>
  );
}
 
export default UnderButtons;