// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    subscribe: false,
  }

  change = () => {
    this.setState(prevstate => ({subscribe: !prevstate.subscribe}))
  }

  render() {
    const {subscribe} = this.state
    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Thank you! Happy learning</p>
        <button onClick={this.change}>
          {subscribe ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    )
  }
}
export default Welcome
