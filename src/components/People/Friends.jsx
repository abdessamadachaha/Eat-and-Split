import Person from "./Person";

function Friends({ items, setSelected, selected }) {
    return (
        <div className="friends">
            {items && items.map(person => (
                <Person 
                    key={items.id}
                    person={person}
                    setSelected = {setSelected}
                    selected = {selected}
                />
            ))}
        </div>
    );
}

export default Friends;