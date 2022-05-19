import React, { useState } from 'react'
import axios from 'axios'

const Loto = () => {
  const [history, setHistory] = useState([])
  const [number, setNumber] = useState(null)

  const clear = () => {
    setHistory([])
    setNumber(null)
  }

  const getNumber = async () => {
    const { data: { number } } = await axios.get(`${process.env.REACT_APP_BACKEND}/loto`)
    setNumber(number)
    setHistory(history => [...history, number])
  }

  return (
    <div>
      <h1>Lịch sử</h1>
      <p>{history.join(', ')}</p>
      <h1>Số mới</h1>
      <p>{number}</p>
      <button onClick={getNumber}>Bốc số</button>
      <button onClick={clear}>Thu tiền</button>
    </div>
  )
}

export default Loto
