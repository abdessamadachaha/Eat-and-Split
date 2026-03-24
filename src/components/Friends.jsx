import { useState } from "react";
import Item from "./Item";
 
function Friends() {
    const [items, setItems] = useState([
        // { name: "Alice", image: "https://i.pravatar.cc/150?img=1" },
        // { name: "Bob", image: "https://i.pravatar.cc/150?img=2" }
    ]);
    const [on, setOn] = useState(false);

    function handleSubmit(fromData) {
        const friend = Object.fromEntries(fromData);
        setItems(prev => [...prev, friend])
    }

    return (
        <div className="content">
            <div className="aboutFriend">
                <div className="listFriends">
                    {items.map(item => (
                        <Item item = {item} />
                    ))}
                </div>
                <form 
                    style={{ display: on ? "" : "none"}} 
                    action={handleSubmit}
                >
                    <label>
                        👫 Friends name 
                        <input type="text" name="name" required/>
                    </label>

                    <label>
                        📸 Image URL
                        <input type="url" name="image" required />
                    </label>

                    <button>Add</button>
                </form>
                <button 
                    onClick={() => setOn(prev => !prev)}
                >
                    { on ? "close" : "Add friend" }
                </button>
            </div>

            <div className="aboutMeal"></div>
        </div>
    );
}

export default Friends;