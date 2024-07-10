// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, value: true}

  generate = () => {
    this.setState(prevState => {
      const isHeads = Math.random() < 0.5
      return {
        heads: isHeads ? prevState.heads + 1 : prevState.heads,
        tails: isHeads ? prevState.tails : prevState.tails + 1,
        value: isHeads,
      }
    })
  }

  render() {
    const {heads, tails, value} = this.state
    return (
      <div className="cont-1">
        <div className="cont-2">
          <h1 className="header">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          {value ? (
            <img
              className="imager"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          ) : (
            <img
              className="imager"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          )}
          <button className="btnon" type="button" onClick={this.generate}>
            Toss Coin
          </button>
          <div className="cont-3">
            <p>Total:{heads + tails}</p>
            <p>Heads:{heads}</p>
            <p>Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
