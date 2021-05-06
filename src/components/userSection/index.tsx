import User from "./User";
import Activity from "./Activity"
import style from "./secound.module.css"


const SecoundLayer = (props: any) => {

  const {datas} = props

  return (
    <div className={style.secoundlayer}>
      <User gender={datas?.gender} birth_date={datas?.birth_date} id={datas?.id}
        home_phone={datas?.home_phone} mobile_phone={datas?.mobile_phone}
        work_phone={datas?.work_phone}   email={datas?.email} />
      <Activity sms={datas?.sms} activity_email={datas?.activity_email}
        orders={datas?.orders} status={datas?.status} since={datas?.since} />
    </div>
  );
}
 
export default SecoundLayer;