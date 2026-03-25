import { useState } from "react";
import FormPay from "./FormPay";
import People from "./People";

function Content() {
    const [items, setItems] = useState([]);
    const [show, setShow] = useState(false);

    return (
        <div className="content">
            <People 
                items = {items}
                setItems = {setItems}
                show = {show}
                setShow = {setShow}
            />
            <FormPay 
                
            />

            

        </div>
    );

}

export default Content;