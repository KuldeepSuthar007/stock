import React, { useEffect, useState } from 'react'

function DisplaySection() {
    const [input, setInput] = useState([]);
    const [stockdata, setStockdata] = useState([]);
    const [mostVolatileCompany, setMostVolatileCompany] = useState('');
    const [pertChange, setPertageChange] = useState(0);


    const handleSearch = () => {
        const fetchdata = async () => {
            const url = `https://finnhub.io/api/v1/quote?symbol=${input}&token=cj2aqkpr01qi64tg1360cj2aqkpr01qi64tg136g`;
            const response = await fetch(url);
            const data = await response.json();
            setStockdata([...stockdata, { name: input, volatile: data.dp, price: data.c }]);
        }
        fetchdata();
        setInput('');
    }

    const calculate = () => {
        if (Math.abs(stockdata.map(item => item.volatile)) > Math.abs(pertChange)) {
            setMostVolatileCompany(stockdata.map(item => item.name));
            setPertageChange(stockdata.map(item => item.volatile));
        }
    }
    useEffect(() => {
        calculate();
    }, [input])


    return (
        <>
            <div className="inputbox">
                <input type="text" placeholder='type stock name here' value={input || ""} onChange={(e) => setInput(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className='display'>
                <div className='stock'>
                    {stockdata.map((item, i) => {
                        return (
                            <div key={i} >
                                <p>Stock :-    <span>{item.name}</span>|</p>
                                <p>current price :- <span>{item.price}</span></p>
                            </div>
                        )
                    }
                    )}
                </div >
                <div>
                    {mostVolatileCompany && (
                        <div className='stock' >
                            <p>{mostVolatileCompany}</p>
                            <p>{pertChange}%</p>
                        </div>
                    )}
                </div>




            </div>
        </>

    )
}

export default DisplaySection