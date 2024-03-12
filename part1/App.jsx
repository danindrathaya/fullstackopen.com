import { useState } from 'react'

const Statistics = ({text, value}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Total = ({good, neutral, bad}) => {

  const total = good + neutral + bad
  if (total === 0){
    return (
      <div>
        No feedback given
      </div>
    )
  }

  const average = ((good - bad) / total).toFixed(2)
  const positive = ((good * 100) / total).toFixed(2) + " %"

  return (
    <div>
      <Statistics text="good" value={good}/>
      <Statistics text="neutral" value={neutral}/>
      <Statistics text="bad" value={bad}/>
      <Statistics text="all" value={total}/>
      <Statistics text="average" value={average}/>
      <Statistics text="positive" value={positive}/>
    </div>
  )
}

const Button = ({onClick, text}) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodbutton = () => {
    setGood(good + 1)
  }

  const handleNeutralbutton = () => {
    setNeutral(neutral + 1)
  }

  const handleBadbutton = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={handleGoodbutton} text='good'/>
        <Button onClick={handleNeutralbutton} text='neutral'/>
        <Button onClick={handleBadbutton} text='bad'/>
      </div>
      <h1>statistics</h1>
      <div>
        <Total good={good} neutral={neutral} bad={bad}/>
      </div>
    </div>
  )
}

export default App