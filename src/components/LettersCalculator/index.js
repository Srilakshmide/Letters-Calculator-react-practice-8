import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputText: '',
  }

  onChangeLettersCount = event => {
    const enteredText = event.target.value
    this.setState({inputText: enteredText})
  }

  render() {
    const {inputText} = this.state
    const count = inputText.length

    return (
      <div className="bg-container">
        <div className="calculator-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="userInput" className="enter-text">
            Enter the phrase
          </label>
          <input
            type="text"
            id="userInput"
            className="input"
            placeholder="Enter the phrase"
            onChange={this.onChangeLettersCount}
          />
          <p className="count-text">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
