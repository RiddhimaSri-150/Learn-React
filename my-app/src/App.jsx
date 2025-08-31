import {useState} from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'

import './App.css'

function App() {
  const[Amount, setAmount]  = useState(0)
  const[From, setFrom] = useState("usd")
  const[To, setTo] = useState("inr")
  const[convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(From)

//   const options = Object.keys(currencyInfo)const options = currencyInfo ? Object.keys(currencyInfo) : [];
const options = currencyInfo ? Object.keys(currencyInfo) : [];


  const swap = () => {
    let temp = From
    setFrom(To)
    setTo(temp)
    setAmount(convertedAmount)
    setConvertedAmount(Amount)
    
  }

  const convert = () => {
    setConvertedAmount(Amount * currencyInfo[To])
  }

  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/31792150/pexels-photo-31792150.jpeg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()  
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount = {Amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency= {From}
                                onAmountChange={(Amount) => setAmount(Amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick = {swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                Amount = {convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency= {To}
                                amountDisable

                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert{From.toUpperCase()} to {To.toUpperCase()} 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
