function AddFriend({ setItems, show, setShow }) {

    function handleFriend(fromData) {
        const id = crypto.randomUUID();
        const friend = {id, ...Object.fromEntries(fromData)}
        setItems(prev => [...prev, friend])
        setShow(show => !show)

    }

    return (
        <div 
            style={{display: show ? "" : "none"}}
            className="addFriend">
            <form action={handleFriend}>
                <label>
                    👫 Friend name
                    <input 
                        type="text"
                        name="name"
                        required 
                    />
                </label>

                <label> 
                    🌄 Image URL
                    <input 
                        type="url"
                        name="image"
                        required 
                    />
                </label>

                <button>Add</button>
            </form>
        </div>
    );
}

export default AddFriend;