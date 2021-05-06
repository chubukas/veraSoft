export interface DetailsProps {
  
}
 
const Details = ( props:any ) => {
 const {FontAwesomeIcon,style,icon,names} = props 
  return (
     <div className={style.insideDetails}>
    { names && <FontAwesomeIcon  icon={icon} size="1x"></FontAwesomeIcon>}
      <span>{ names}</span>
    </div>
    );
}
 
export default Details;