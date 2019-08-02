import { toast } from 'react-toastify';

export const dispalyToast = (message, toastType = 'success') => {
  if (toastType === 'error') {
    return toast.error(message);
  }
  return toast.success(message);
};
