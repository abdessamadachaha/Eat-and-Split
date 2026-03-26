import { useState } from "react";
import FormPay from "./FormPay";
import People from "./People";

function Content() {
    const [items, setItems] = useState([]);
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(null);

    return (
        <div className="content">
            <People 
                items = {items}
                setItems = {setItems}
                show = {show}
                setShow = {setShow}
                setSelected = {setSelected}
                selected = {selected}
            />
            {selected && <FormPay selected= {selected}/> }

            

        </div>
    );

}

export default Content;