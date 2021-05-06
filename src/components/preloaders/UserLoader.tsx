import style from "./PreLoader.module.css";
 
const UserLoader = () => {
  return (
    <div className={style.userloader}>
    <div className={style.userSpining}>
      <p>Loading....</p>
    </div>
  </div>
   );
}
 
export default UserLoader;