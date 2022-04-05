import React from "react"

function PopupWindow(props){
    return (props.trigger) ? (
        <div className="popup">
            <p>Wiadomość została wysłana</p>
            {props.children}
        </div>
    ) :"";
}

export default PopupWindow;