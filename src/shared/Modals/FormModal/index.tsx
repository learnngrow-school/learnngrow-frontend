import "./form-modal.css"
import React from 'react';
import Modal from 'react-bootstrap/Modal';

interface ModalProps {
    id? : string;
    isOpen: boolean;
    title?: string;
    content: React.ReactNode;
    className?: string
}

const FormModal: React.FC<ModalProps> = (
    { isOpen, title, content, className}) => {
    
    const modalRef = React.useRef(null);

    return (
        <Modal show={isOpen} ref={modalRef} className={className ? className : ""}
        keyboard={false} backdrop='static' enforceFocus={false}>
            <div className="mod-content">
                <div className="mod-text text--body-m text-600 text--blue">
                    {title}
                </div>
                {content}
            </div>
        </Modal>
  );
};

export default FormModal;
