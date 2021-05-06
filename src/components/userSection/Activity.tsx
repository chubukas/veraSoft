import style from "./secound.module.css"

 
const Activity = (props: any) => {
  
  const {sms,activity_email,orders,status,since} = props



  return (
    <div className={style.activityMainTop}>
      <div className={style.majorActivity}>
        <div className={style.activityTop}>
          <span>
         { since && `90-Day COMMUNICATION ACTIVITY`}
          </span>
        </div>
        <div className={style.activityMain}>
          <div className={style.activity}>
            <p>{ sms}</p>
            <div> 
            </div>
            <p>{sms && `sms`}</p>
          </div>
          <div className={style.activity}>
            <p>{ activity_email}</p>
            <div> 
            </div>
            <p>{ activity_email && ` email`}</p>
          </div>
          <div className={style.activity}>
            <p>{orders}</p>
            <div> 
            </div>
            <p>{orders && `orders`}</p>
          </div>
        </div>     
      </div>
      <div className={style.activitylast}>
        <p>{since && `SMS CARRIER STATUS`}</p>
            <p>{status}</p>
            <div> 
            </div>
            <p> {since && `since ${new Date(since).toDateString()}`}</p>
          </div>
      </div>
   );
}
 
export default Activity;