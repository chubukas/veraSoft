import { useSelector, useDispatch } from "react-redux";

import { SelectOrders, handleOrderAvailable, handleActiveButton } from "../../features/slices/OrderSlice";

type SubButtonProps = any[]

const SubButton = (props: any) => {
  const { btnclass, names, orderTypes } = props


  const dispatch = useDispatch()

  const datas: SubButtonProps = useSelector(SelectOrders)

  const getOrderType = (orderType: string) => {

    let ordersTypes: any[] = [];

    switch (orderType) {
      case "orders_A":
        ordersTypes = datas.map((order: any) => order.orders_A)
        dispatch(handleActiveButton("orders_A"))
        break;

      case "orders_AA":
        ordersTypes = datas.map((order: any) => order.orders_AA)
        dispatch(handleActiveButton("orders_AA"))
        break;

      case "orders_AAA":
        ordersTypes = datas.map((order: any) => order.orders_AAA)
        dispatch(handleActiveButton("orders_AAA"))
        break;

      case "orders_B":
        ordersTypes = datas.map((order: any) => order.orders_B)
        dispatch(handleActiveButton("orders_B"))
        break;

      case "orders_C":
        ordersTypes = datas.map((order: any) => order.orders_C)
        dispatch(handleActiveButton("orders_C"))
        break;

      default:
        break;
    }

    ordersTypes[0].length === 0 ? dispatch(handleOrderAvailable(false)) : dispatch(handleOrderAvailable(true))
  }

  return (
    <button onClick={() => getOrderType(orderTypes)} className={btnclass}>
      {names}
    </button>);
}

export default SubButton;