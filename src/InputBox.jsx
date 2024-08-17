import Api from "./Api/Api";
function InputBox({
    label,
    country,
    amount,
    List ,
    currencyChange,
    amountChange,
    disabl=false
}) {
    

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `} >
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block">
                    {country}
                </label>
                <input
                    
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e)=>{ amountChange && Number(amountChange(e.target.value))
                    }}
                    disabled={disabl}
                    
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={country}
                    onChange={(e)=> currencyChange && currencyChange(e.target.value)}
                    
                    
                >
                    
                       
                        {List.map(item=>
                                    <option  value={item}  id={item}>{item}</option>
                                )}
                        
                
                </select>
            </div>
        </div>
    );
}



export default InputBox
