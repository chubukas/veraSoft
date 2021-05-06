import {useSelector,useDispatch} from "react-redux"
import { useEffect, useState } from "react"

import FullPageLoader from "./preloaders/FullPageLoader"
import Header from "./headerSection/Header";
import SecoundLayer from "./userSection";
import OrdersSection from "./ordersSection"
import UserLoader from "./preloaders/UserLoader"
import {SelectUser,fetchUser} from "../features/slices/UserSlice"



 type AllComponentsProps = {
  id: number,
  names: string,
  gender: string,
  birth_date: string,
  home_phone: string,
  mobile_phone: string,
  work_phone: string,
  email: string,
  sms: number,
  activity_email:number,
  orders: number,
  since: string,
  status: string

}
 
const AllComponents = () => {

  const data = useSelector(SelectUser)
  const requestStatus = useSelector((state: any) => state.user.status)
  const pageLoader = useSelector((state: any) => state.orders.orderPageStatus)
  
  const [loaded, setLoaded] = useState(false);

const dispatch = useDispatch();

  // EFFECT FOR THE USER DATA
  useEffect(() => {
     dispatch(fetchUser())
    requestStatus === "completed" && setLoaded(true)

},[dispatch,requestStatus])


  // USER DATA
  const datas = data.map((d:any) => {
    
    const thedatas:AllComponentsProps = {
      id: d.id,
      names: d.first_name + "" + d.last_name,
      gender: d.gender,
      birth_date: d.birth_date,
      home_phone: d.home_phone,
      mobile_phone: d.mobile_phone,
      work_phone: d.work_phone,
      email: d.email,
      sms: d.activity.sms,
      activity_email: d.activity.email,
      orders: d.activity.orders,
      since: d.carrier_status.since,
      status: d.carrier_status.status
    }

    return (
      <>
        <Header key={d.names} names={thedatas.names} />
        <SecoundLayer key={d.mobile_phone} datas={thedatas} />
      </>  
    )

  })


  return ( 
    <>
      { pageLoader && <FullPageLoader />}
      
      { loaded ? datas :
        <>
          <UserLoader/>
          <Header names={null} />
          <SecoundLayer datas={null} />
        </>}
        <OrdersSection />
    </>
  );
}
 
export default AllComponents;