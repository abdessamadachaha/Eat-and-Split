import Friends from "./People/Friends";
import AddFriend from "./People/AddFriend";

function People({ items, show, setItems, setShow }) {
    function handleShow() {
        setShow(prev => !prev)
    }

    return (
        <div className="people">
            <Friends 
                items = {items}
            />

            <AddFriend 
                show = {show}
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






