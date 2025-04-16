import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { clearError } from "../redux/error.slice";
function Error() {
  let dispatch = useDispatch();
  let { userError } = useSelector((state) => state.errors);
  useEffect(() => {
    if (userError) {
      Swal.fire({
        title: "Error",
        text: userError,
        icon: "error",
        confirmButtonText: "OK",
      }).then(() => {
        dispatch(clearError());
      });
    }
  }, [userError]);
  return <></>;
}

export default Error;
