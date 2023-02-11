import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'
import Header from './Header'

const initialDataList = []
class Home extends Component {
  state = {userInput: '', timeStamp: ''}

  onInputChange = e => {
    const time = formatDistanceToNow(new Date())
    this.setState({userInput: e.target.value, timeStamp: time})
  }

  onSubmit = () => {
    const {userInput, timeStamp} = this.state
    initialDataList.push(userInput, timeStamp)
    localStorage.setItem('data', JSON.stringify(initialDataList))
    console.log()
  }

  render() {
    const {userInput} = this.state

    return (
      <>
        <div>
          <Header />
          <input type="text" onChange={this.onInputChange} value={userInput} />
          <button type="button" onClick={this.onSubmit}>
            Submit
          </button>
        </div>
      </>
    )
  }
}

export default Home
