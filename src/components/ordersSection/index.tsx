import { useSelector } from "react-redux"
import { useState } from "react"

import style from "./OrdersSection.module.css";
import SubButtons from "./SubButtons"
import UnderButton from "./UnderButtons"
import TableData from "../tabledataSection"
import TableLoader from "../preloaders/TableLoader";
import EmptyLoader from "../preloaders/EmptyLoader"

const OrdersSection = () => {


  const checkError = useSelector((state: any) => state.orders.btnError)
  const checkOrderAvailable = useSelector((state: any) => state.orders.orderAvailable)
  const getActiveButton = useSelector((state: any) => state.orders.activeButton)

  const [showErrors, setShowErrors] = useState(false)

  const fireError = () => {
    setTimeout(() => {
      setShowErrors(true)
    }, 2000);

    if (!showErrors) {
      return (
        <TableLoader />
      )
    }
    else {
      return (
        <EmptyLoader />
      )
    }
  }

  return (
    <>
      <div className={style.Main}>
        <SubButtons
          btnclass={getActiveButton === "orders_A" ? style.activeButton : style.buttons}
          names={`ORDERS A`} orderTypes={`orders_A`} />
        <SubButtons
          btnclass={getActiveButton === "orders_AA" ? style.activeButton : style.buttons}
          names={`ORDERS AA`} orderTypes={`orders_AA`} />
        <SubButtons
          btnclass={getActiveButton === "orders_AAA" ? style.activeButton : style.buttons}
          names={`ORDERS AAA`} orderTypes={`orders_AAA`} />
        <SubButtons
          btnclass={getActiveButton === "orders_B" ? style.activeButton : style.buttons}
          names={`ORDERS B`} orderTypes={`orders_B`} />
        <SubButtons
          btnclass={getActiveButton === "orders_C" ? style.activeButton : style.buttons}
          names={`ORDERS C`} orderTypes={`orders_C`} />
      </div>
      {checkOrderAvailable ?
        <>
          <UnderButton desing={style.underButtons} roundButton={style.roundButtons} normalButton={style.normalButton} />
          {!checkError ? <TableData /> : fireError()}
        </>
        : <EmptyLoader />}


    </>
  );
}

export default OrdersSection;