import InputBox from "./InputBox";
import Api from "./Api/Api";
import { useCallback, useEffect, useState } from "react";
function App() {
  const [amount, setAmount] = useState(1);
  const [toAmount, setToAmount] = useState();
  const [currency, setCurrency] = useState("inr");
  const [toCurrency, setToCurrency] = useState("usd");

  var useApi = Api(currency);
  const option = Object.keys(useApi);

  const swapCurrency = () => {
    setCurrency(toCurrency);
    setToCurrency(currency);
    setAmount(toAmount);
    setToAmount(amount);
  };

  const converteAmount =() => {
    
    setToAmount( useApi[toCurrency]* amount)
    console.log(amount);
    console.log(toAmount);
    console.log(currency);
    
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                country={currency}
                List={option}
                amount={amount}
                currencyChange={(currency) => { setCurrency(currency)}}
                amountChange={(currency) => { setAmount(currency)}}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swapCurrency}
               
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label={"to"}
                country={toCurrency}
                List={option}
                amount={toAmount}
                currencyChange={(currency) => { setToCurrency(currency)}}
                amountChange={(a)=>{setToAmount(toAmount)}}
                // disabl={true}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={converteAmount}
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
