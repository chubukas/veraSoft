import { useDispatch } from "react-redux";
import { handlePageStatus } from "../../features/slices/OrderSlice";

import style from "./PreLoader.module.css";

const FullPageLoader = () => {
  const dispatch = useDispatch();

  const onclicks = () => {
    dispatch(handlePageStatus(false));
  };

  return (
    // < !--Preloader -- >
    <div className={style.preloader}>
      <div className={style.close}>
        <button onClick={() => onclicks()} className={style.closeBtn}>
          X
        </button>
      </div>
      <div className={style.spinner}>
        <div className={style.cube1}></div>
        <div className={style.cube2}></div>
      </div>
    </div>
    // <!-- // Preloader -->
  );
};

export default FullPageLoader;
