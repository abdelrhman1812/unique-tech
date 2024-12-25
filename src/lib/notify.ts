import { toast, ToastOptions } from "react-toastify";

type ToastType = "success" | "error" | "warning" | "info";

interface NotifyParams {
  type: ToastType;
  msg: string;
}

const notify = ({ type, msg }: NotifyParams): void => {
  const options: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  toast[type](msg, options);
};

export default notify;
