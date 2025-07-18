import { toast } from "react-toastify";

const toastProps = { autoClose: 5000 };
export const successToast = (message) => {
  return toast.success(message, toastProps);
};

export const errorToast = (message) => {
  return toast.error(
    typeof message !== "string"
      ? "Something went wrong"
      : message || "Something went wrong",
    toastProps
  );
};

export const warningToast = (message) => {
  return toast.warning(message, toastProps);
};
