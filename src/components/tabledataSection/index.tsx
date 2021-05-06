import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { SelectOrders, fetchOrders } from "../../features/slices/OrderSlice";
import style from "./tabledata.module.css"
import TableLoader from "../preloaders/TableLoader"

type TableDateProps = {
  id: number,
  order_id: number,
  sent_dt: string,
  sent_tm: string,
  subject: {
    title: string,
    email: string
  },
  type: string
}


type allTablestate = any[]

type mainData = any[]

type allDatas = any[]

// TABLE COMPONENT
const TableData = () => {

  const allTableState: allTablestate = []
  const mainData: mainData = []

  // SELECTORS
  const datas: allDatas = useSelector(SelectOrders)
  const selectStatus = useSelector((state: any) => state.orders.status)

  // COMPONENT STATES
  const [completRequest, setCompleteRequest] = useState(false)
  const [tableData, setTableData] = useState(allTableState)
  const [MainData, setMainData] = useState(mainData)
  const [sortData, setSortData] = useState(false)


  // DISPATCH FUNCTION
  const dispatch = useDispatch()

  // USEEFFECT TO UPDATE THE STATE
  useEffect(() => {
    setTableData(datas)
    const OrderAAA = tableData.map((order: any) => order.orders_AAA.sent)
    setMainData(OrderAAA)

  }, [datas, tableData])

  // USEEFFECT TO FETCH ORDERS 
  useEffect(() => {
    dispatch(fetchOrders())
    selectStatus === "completed" && setCompleteRequest(true)
  }, [dispatch, selectStatus])


  // ASC AND DESC FUNCTION 
  const clickAndSort = () => {

    if (!sortData) {
      const ASCOrder = MainData.map(o => o.slice().sort((a: any, b: any) => a.subject.title > b.subject.title ?
        1 : b.subject.title > a.subject.title ? -1 : 0))
      setSortData(!sortData)
      setMainData(ASCOrder)
    }
    else {
      const DESCOrder = MainData.map(o => o.slice().sort((a: any, b: any) => a.subject.title > b.subject.title ?
        -1 : b.subject.title > a.subject.title ? 1 : 0))
      setSortData(!sortData)
      setMainData(DESCOrder)
    }
  }

  // ELLIPIS FUNCTION
  const Ellipis = (input: string) => input.length > 23 ? `${input.substring(0, 23)}...` : input;

  // OUTPUTING DATA ON THE TABLE
  const OrderAAADatas = MainData.map((orders: any) => {
    return orders.map((order: TableDateProps) => {

      return (
        <tr key={order.id} className={style.tabledatas}>
          <td>
            <p className={style.uptabledatas}> {new Date(order.sent_dt).toDateString()}</p>
            <p className={style.downtabledatas}>{order.sent_tm}</p>
          </td>
          <td>
            <p className={style.uptabledatas}>{Ellipis(order.subject.title)}</p>
            <p className={style.downtabledatas}>{Ellipis(order.subject.email)}</p>
          </td>
          <td>
            <p className={style.downtabledatas}>{Ellipis(order.type)}</p>
          </td>
          <td>
            <p className={style.downtabledatas}>{order.order_id}</p>
          </td>
          <td>
            <button className={style.tablebutton}>RESEND</button>
          </td>
        </tr>
      )
    })
  })

  return (
    <>
      { !completRequest ? (<TableLoader />) : (<div>
        <table className={style.MainTable}>
          <thead onClick={() => clickAndSort()}>
            <tr className={style.tableHead}>
              <th>DATE & TIME</th>
              <th>SUBJECT</th>
              <th>COMMUNICATION TYPE</th>
              <th>ORDER #</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {OrderAAADatas}
          </tbody>
        </table>
      </div>)
      }
    </>
  );
}

export default TableData;