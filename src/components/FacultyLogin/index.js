import {Component} from 'react'
import './index.css'
import Header from '../Header'

class FacultyLogin extends Component {
  state = {userName: '', password: ''}

  getRollData = e => {
    this.setState({userName: e.target.value})
  }

  getPassData = e => {
    this.setState({password: e.target.value})
  }

  onLogin = e => {
    e.preventDefault()
    const {userName, password} = this.state
    if (password === '') {
      alert('password field is required')
    } else if (password.length < 5) {
      alert('password should be more than 5 characters')
    } else if (userName === '') {
      alert('userName field is required')
    } else {
      const storedData = localStorage.getItem('FacultyDetails')
      const parsedData = JSON.parse(storedData)
      const isValid = parsedData.filter(
        eachItem =>
          eachItem.userName === userName && eachItem.password === password,
      )
      if (isValid.length !== 0) {
        alert('Login Successfull')
        const tokenList = JSON.parse(
          localStorage.getItem('facultytoken') || '[]',
        )
        tokenList.push(userName)
        localStorage.setItem('facultytoken', JSON.stringify(tokenList))
        const {history} = this.props
        history.replace('/faculty-section')
      } else {
        alert('Invalid Login Credentials')
      }
    }
  }

  render() {
    const {userName, password} = this.state
    return (
      <div className="bg-container">
        <Header />
        <div>
          <form onSubmit={this.onLogin}>
            <label className="label" htmlFor="roll">
              Username
            </label>
            <br />
            <input
              id="roll"
              type="text"
              placeholder="Enter Username"
              className="input"
              onChange={this.getRollData}
              value={userName}
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

export default FacultyLogin
