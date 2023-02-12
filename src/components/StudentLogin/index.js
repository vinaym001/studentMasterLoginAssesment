import {Component} from 'react'
import './index.css'
import Header from '../Header'

class StudentLogin extends Component {
  state = {rollNumber: '', password: ''}

  getRollData = e => {
    this.setState({rollNumber: e.target.value})
  }

  getPassData = e => {
    this.setState({password: e.target.value})
  }

  onLogin = e => {
    e.preventDefault()
    const {rollNumber, password} = this.state
    if (password === '') {
      alert('password field is required')
    } else if (password.length < 5) {
      alert('password should be more than 5 characters')
    } else if (rollNumber === '') {
      alert('rollNumber field is required')
    } else {
      const storedData = localStorage.getItem('StudentDetails')
      const parsedData = JSON.parse(storedData)
      const isValid = parsedData.filter(
        eachItem =>
          eachItem.rollNumber === rollNumber && eachItem.password === password,
      )
      if (isValid.length !== 0) {
        alert('Login Successfull')
        localStorage.setItem('studenttoken', rollNumber)
        const {history} = this.props
        history.replace('/student-section')
      } else {
        alert('Invalid Login Credentials')
      }
    }
  }

  render() {
    const {rollNumber, password} = this.state
    return (
      <div className="bg-container">
        <Header />
        <div>
          <form onSubmit={this.onLogin}>
            <label className="label" htmlFor="roll">
              Roll Number
            </label>
            <br />
            <input
              id="roll"
              type="text"
              placeholder="Enter Roll Number"
              className="input"
              onChange={this.getRollData}
              value={rollNumber}
            />
            <br />
            <label className="label" htmlFor="password">
              Password
            </label>
            <br />
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              className="input"
              onChange={this.getPassData}
              value={password}
            />
            <br />
            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default StudentLogin
