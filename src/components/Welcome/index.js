// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {subStatus: 'Subscribe'}

  onSub = () => {
    this.setState(prevState => {
      if (prevState.subStatus === 'Subscribe') {
        return {subStatus: 'Subscribed'}
      }
      return {subStatus: 'Subscribe'}
    })
  }

  render() {
    const {subStatus} = this.state

    return (
      <div className="welcome-bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.onSub}>
          {subStatus}
        </button>
      </div>
    )
  }
}

export default Welcome
