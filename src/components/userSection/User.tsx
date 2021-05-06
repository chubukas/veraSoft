import style from "./secound.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faMobile, faAddressBook, faHouseUser, faAt } from "@fortawesome/free-solid-svg-icons"
import Details from "./Detailst"

const User = (props: any) => {
  
  const { gender, birth_date, id,
    home_phone, mobile_phone,
    work_phone, email } = props
  
  let age:any = new Date(birth_date).getTime() - Date.now();

  age = new Date(age)
  age = age.getUTCFullYear();
  age = Math.abs(age - 1970);

  return (
    <>
    <div className={style.userImage}>
        {gender &&
          <>
            <FontAwesomeIcon icon={faUser} size="5x"></FontAwesomeIcon>
              <span>{gender} - {age}</span>
          </>
        }
    </div>
    <div className={style.userDetails}>
      <Details FontAwesomeIcon={FontAwesomeIcon} style={style} icon={faUser}names={id && `#${id}`} />
      <Details FontAwesomeIcon={FontAwesomeIcon} style={style} icon={faMobile} names={mobile_phone} />
      <Details FontAwesomeIcon={FontAwesomeIcon} style={style} icon={faAddressBook} names={work_phone} />
      <Details FontAwesomeIcon={FontAwesomeIcon} style={style} icon={faHouseUser} names={home_phone} />
      <Details FontAwesomeIcon={FontAwesomeIcon} style={style} icon={faAt} names={email} />
    
    </div>
      </>
  );
}
 
export default User;