import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import "./toast.css"
import { forwardRef, useImperativeHandle } from "react";
import { ToastType } from "../../enums/popup";

export interface INotify {
    notify: (message: string, type: ToastType) => void;
}

const ToastPopup = forwardRef<INotify>((_, ref) => {
    const notify = (message: string, type: ToastType) => {
        switch (type) {
            case ToastType.success:
                toast.success(message);
                break;
            case ToastType.error:
                toast.error(message);
                break;
            case ToastType.info:
                toast.info(message);
                break;
            default:
                break;
        }
    }

    useImperativeHandle(ref, () => ({
        notify: notify
    }));

    return (
        <ToastContainer autoClose={2000} className='toast-container'/>
    )
})

export default ToastPopup;
