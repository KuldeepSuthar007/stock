import React from 'react'

function Header({ input, setInput }) {
    return (
        <div className="inputbox">
            <input type="text" placeholder='type stock name here' value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
    )
}

export default Header