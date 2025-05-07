import { toast } from "react-toastify";

export const notify = (message, type) => {
  const commonOptions = {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  };

  switch (type) {
    case "sucess":
      toast.sucess(message, commonOptions);
      break;
    case "info":
      toast.info(message, commonOptions);
      break;
    case "warning":
      toast.warning(message, commonOptions);
      break;
    case "error":
      toast.error(message, commonOptions);
      break;
  }
};
