function Person({ person }) {
    return (
        <div className="person">
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
            <button>Select</button>
        </div>

    );
}

export default Person;