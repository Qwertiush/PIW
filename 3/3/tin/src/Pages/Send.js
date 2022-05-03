import PopupWindow from "./PopupWindow";
import { useState } from "react";
import { useRef } from "react";


const Send = () => {
    
    const [button,setButton] = useState(false);
    console.log("Rendered Send");

    return(
        <div>
            <p>Wyślij wiadomość do grupy</p>
            <textarea id="messagebox" cols="40" rows="20" required="required" placeholder="Wpisz wiadomość"></textarea>
            <br/>
            <button onClick={ () => {
                setButton(true);
                console.log("wysłane");
                var x = document.getElementById("messagebox");
                x.value = "";
                setTimeout(() => {
                    setButton(false);
                  }, 2000) // 3 seconds
                }}>Wyślij</button>
            <PopupWindow trigger={button}/>
        </div>
    );
}

export default Send;
