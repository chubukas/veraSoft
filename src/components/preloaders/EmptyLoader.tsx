import style from "./PreLoader.module.css";
 
const EmptyLoader = () => {
  return (
    <div className={style.EllipsisH}>
        <p>No Items</p>
    </div>
   );
}
 
export default EmptyLoader;