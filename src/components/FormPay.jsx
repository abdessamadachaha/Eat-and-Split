function FormPay({ selected }) {
    return (
        <div className="fromPay">
            <h2>split a bill with {selected.name}</h2>
            <form action="">
                <label>
                    💰 Bill value
                    <input 
                        type="number"
                        name="bill"
                        required 
                    />
                </label>

                <label>
                    🧍‍♂️ Your expense
                    <input 
                        type="number"
                        name="expense"
                    />
                </label>

                <label>
                    🧑🏻‍🤝‍🧑🏼 {selected.name} expense
                    <input 
                        type="text"
                        name="xexpense"
                        readOnly    
                    />
                </label>

                <label>
                    🤑 Who is paying the bill?
                    <select name="" id="">
                        <option value="you">You</option>
                        <option value={selected.name}>{selected.name}</option>
                    </select>
                </label>

                <button>Split bill</button>

                
            </form>

        </div>
    );

}

export default FormPay;