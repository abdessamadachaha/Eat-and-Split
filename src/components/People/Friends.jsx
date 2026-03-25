import Person from "./Person";

function Friends({ items }) {
    return (
        <div className="friends">
            {items && items.map(person => (
                <Person 
                    key={items.id}
                    person={person}
                />
            ))}
        </div>
    );
}

export default Friends;