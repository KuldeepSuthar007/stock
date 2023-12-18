import React, { useEffect, useState } from 'react'

function DisplaySection({ input }) {

    const [stockdata, setStockdata] = useState([]);
    const fetchdata = async () => {
        const url = `https://finnhub.io/api/v1/quote?symbol=${input}&token=cj2aqkpr01qi64tg1360cj2aqkpr01qi64tg136g`;
        const response = await fetch(url);
        const data = await response.json();
        setStockdata([data]);


    }
    useEffect(() => {
        fetchdata();
    }, [input])


    return (
        <div className='display'>
            <div className='stock'>
                {stockdata.map((item, i) => {
                    return (
                        <div key={i}>
                            <p>Stock :-    <span>{input}</span>|</p>
                            <p>current price :- <span>{item.c}</span></p>
                            {/* <p><span>Change :- </span>{item.d}</p>
                            <p><span>Percent change :- </span>{item.dp}</p>
                            <p><span>High price of the day:- </span>{item.h}</p>
                            <p><span>Low price of the day:- </span>{item.l}</p>
                            <p><span>Open price of the day :- </span>{item.o}</p> */}
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default DisplaySection