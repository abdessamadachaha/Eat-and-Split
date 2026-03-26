function Person({ person, setSelected, selected }) {
    const isSelected = selected?.id === person.id;

    return (
        <div className={`person ${isSelected ? 'selected' : ''}`}>
            <div className="profile">
                <img 
                    src={person.image} 
                    alt={`picture of ${person.name}`} 
                />
                <div className="info">
                    <p>{person.name}</p>
                    <p>You and {person.name} are even</p>
                </div>
            </div>
            <button
                onClick={() => setSelected(curr => curr?.id === person.id ? null : person)}
            >{isSelected ? "Close" : "Select"}</button>
        </div>

    );
}

export default Person;