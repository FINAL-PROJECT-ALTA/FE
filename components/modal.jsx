import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Modal({ show, onClose, children }) {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleClose = (e) => {
        e.preventDefault()
        onClose()
    }

    const modalContent = show ? (
        <div className="overlay">
            <div className="modal">
                <div className="header">
                    <a href="#" onClick={handleClose}>
                        <button className='text-bg-dark-green hover:text-amber-400' ><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        </button>
                    </a>
                </div>
                <div className="body">{children}</div>
            </div>
        </div>

    ) : null

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        )
    } else {
        return null
    }
}

export default Modal;