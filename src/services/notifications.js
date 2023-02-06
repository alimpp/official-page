import { useToast } from "vue-toastification";
const Toast = useToast();

export const SuccessNotification = (timeout,text,position) => {
  Toast.success(text, {
    timeout: timeout,
    position: position,
  });
}

export const InfoNotification = (timeout,text,position) => {
  Toast.info(text, {
    timeout: timeout,
    position: position,
  });
}

export const WarningNotification = (timeout,text,position) => {
  Toast.warning(text, {
    timeout: timeout,
    position: position,
  });
}

export const ErrorNotification = (timeout,text,position) => {
  Toast.error(text, {
    timeout: timeout,
    position: position,
  });
}