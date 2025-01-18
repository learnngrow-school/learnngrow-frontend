import React from "react";
import Modal from 'react-bootstrap/Modal';
import "./review-popup.css"

interface IProps {
    text: string
    isOpen: boolean
    onHide: () => void
}

const ReviewPopup = ({text, onHide, isOpen }:IProps) => {

    const modalRef = React.useRef(null);
    
    return (
        <Modal show={isOpen} onHide={onHide} ref={modalRef} 
        keyboard={false} backdrop='static' enforceFocus={false} className="review-popup-container">
            <div className="review-popup-content">
            <button type="button" className="btn-review-popup-close" data-bs-dismiss="modal" onClick={onHide}/>
                 <div className="text--body-s text-400 review-text">
                    {text}
                 </div>
            </div>
        </Modal>
    )
}

export default ReviewPopup