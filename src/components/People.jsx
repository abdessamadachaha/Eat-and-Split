import Friends from "./People/Friends";
import AddFriend from "./People/AddFriend";

function People({ items, show, setItems, setShow, setSelected, selected }) {
    function handleShow() {
        setShow(prev => !prev)
    }

    return (
        <div className="people">
            <Friends 
                items = {items}
                setSelected = {setSelected}
                selected = {selected}
            />

            <AddFriend 
                show = {show}
                setShow={setShow}
                setItems = {setItems}
            />

            <button 
                className="buttonAddFriend"
                onClick={handleShow}
            >
                {show ? 'Close' : 'Add Friend'}
            </button>
        </div>
    );

}

export default People;






