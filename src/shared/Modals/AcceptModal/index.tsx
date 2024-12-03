import "./accept-modal.css"
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import BaseButton from "../../Buttons/BaseButton";

interface ModalProps {
    id? : string;
    isOpen: boolean;
    onOk: () => void;
    onCancel?: () => void;
    okText: string;
    title?: string;
    content: React.ReactNode;
}

const AcceptModal: React.FC<ModalProps> = (
    { isOpen, onCancel, onOk, content, okText}) => {
    
    const bsModalRef = React.useRef(null);

    return (
        <>
        <Modal show={isOpen} onHide={onCancel} ref={bsModalRef} 
        keyboard={false} backdrop='static' enforceFocus={false} className="mod-container">
            <div className="modal-content">
                {/* <div className="mod-header">
                     <h5 className="modal-title" id="staticBackdropLabel">{title}</h5>
                     <button type="button" className="btn-close cross-button" 
                     data-bs-dismiss="modal" 
                     aria-label="Close" onClick={onCancel}/>
                </div> */}
                 <div className="mod-body text--heading2 text-600 text--blue">
                     {content}
                 </div>
                 <div className="mod-footer">
                    <BaseButton text="Отмена" onClick={onCancel} theme="dark-blue-primary"/>
                     <BaseButton text={okText} onClick={onOk} theme="pink-secondary"/>
                 </div>
            </div>
        </Modal>
        </>
  );
};

export default AcceptModal;
