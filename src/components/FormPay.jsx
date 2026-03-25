function FormPay() {
    return (
        <div className="fromPay">
            <h2>split a bill with X</h2>
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
                    🧑🏻‍🤝‍🧑🏼 X expense
                    <input 
                        type="text"
                        name="xexpense"
                        readOnly    
                    />
                </label>

                <label>
                    🤑 Who is paying the bill?
                    <select name="" id="">
                        <option value="">You</option>
                        <option value="">X</option>
                    </select>
                </label>

                <button>Split bill</button>

                
            </form>

        </div>
    );

}

export default FormPay;