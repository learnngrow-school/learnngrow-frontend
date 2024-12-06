import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import "./toast.css"
import { forwardRef, useImperativeHandle } from "react";
import { ToastTypeEnum } from "../../enums/popup";

export interface INotify {
    notify: (message: string, type: ToastTypeEnum) => void;
}

const ToastPopup = forwardRef<INotify>((_, ref) => {
    const notify = (message: string, type: ToastTypeEnum) => {
        switch (type) {
            case ToastTypeEnum.success:
                toast.success(message);
                break;
            case ToastTypeEnum.error:
                toast.error(message);
                break;
            case ToastTypeEnum.info:
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
