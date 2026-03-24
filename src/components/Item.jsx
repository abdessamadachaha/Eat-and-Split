function Item({ item }) {
    return (
        <div className="item">
            <div className="itemInfo">
                <img 
                    src= {item.image}
                    alt={`profile ${item.name}`}
                />
                <div className="info">
                    <p>{item.name}</p>
                    <p>You and {item.name} are even</p>
                </div>
            </div>
            <button>select</button>
        </div>
    );
}

export default Item;