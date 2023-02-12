import {Component} from 'react'

import './index.css'

class FacultyRegister extends Component {
  state = {
    name: '',
    userName: '',
    DOB: '',
    gender: '',
    mobileNo: '',
    emailId: '',
    password: '',
  }

  getNameData = e => {
    this.setState({name: e.target.value})
  }

  getUserNameData = e => {
    this.setState({userName: e.target.value})
  }

  getDobData = e => {
    this.setState({DOB: e.target.value})
  }

  getGenderData = e => {
    this.setState({gender: e.target.value})
  }

  getMobileData = e => {
    this.setState({mobileNo: e.target.value})
  }

  getEmailData = e => {
    this.setState({emailId: e.target.value})
  }

  getPassData = e => {
    this.setState({password: e.target.value})
  }

  onRegister = e => {
    const {
      name,
      userName,
      DOB,
      gender,
      mobileNo,
      emailId,
      password,
    } = this.state
    e.preventDefault()
    const newUser = {
      name,
      userName,
      DOB,
      gender,
      mobileNo,
      emailId,
      password,
    }

    const storedUserDetails = JSON.parse(
      localStorage.getItem('FacultyDetails') || '[]',
    )
    const isValid = storedUserDetails.filter(
      eachItem => eachItem.userName === userName,
    )
    if (isValid.length !== 0) {
      alert('Username already exists. Try other one')
    } else if (name === '') {
      alert('name field is required')
    } else if (userName === '') {
      alert('username field is required')
    } else if (password === '') {
      alert('password field is required')
    } else if (password.length < 5) {
      alert('password should be more than 5 characters')
    } else if (mobileNo === '') {
      alert('mobileNo field is required')
    } else if (DOB === '') {
      alert('DOB field is required')
    } else if (emailId === '') {
      alert('emailId field is required')
    } else if (!emailId.includes('@')) {
      alert('provide valid email id')
    } else {
      const users = JSON.parse(localStorage.getItem('FacultyDetails') || '[]')
      users.push(newUser)
      localStorage.setItem('FacultyDetails', JSON.stringify(users))
      const {history} = this.props
      history.replace('/faculty-login')
    }
  }

  render() {
    const {
      name,
      DOB,
      mobileNo,
      gender,
      emailId,
      password,
      userName,
    } = this.state
    return (
      <div className="bg-container">
        <div className="form-container">
          <h1 className="head">Sign Up</h1>
          <form className="form" onSubmit={this.onRegister}>
            <label className="label" htmlFor="name1">
              Name
            </label>
            <br />
            <input
              id="name1"
              type="text"
              placeholder="Enter Name"
              className="input"
              onChange={this.getNameData}
              value={name}
            />
            <br />
            <label className="label" htmlFor="username1">
              Name
            </label>
            <br />
            <input
              id="username1"
              type="text"
              placeholder="Enter username"
              className="input"
              onChange={this.getUserNameData}
              value={userName}
            />
            <br />
            <label className="label" htmlFor="dob1">
              Date of Birth
            </label>
            <br />
            <input
              id="dob1"
              type="date"
              placeholder="Enter Date of Birth"
              className="input"
              onChange={this.getDobData}
              value={DOB}
            />
            <br />
            <label className="label" htmlFor="gender1" value={gender}>
              Gender
            </label>
            <label className="label" htmlFor="male1">
              Male
            </label>
            <input
              id="male1"
              type="radio"
              value="Male"
              name="gender"
              onChange={this.getGenderData}
            />
            <label className="label" htmlFor="female1">
              Female
            </label>
            <input id="female1" type="radio" value="Female" name="gender" />
            <br />
            <label className="label" htmlFor="mobile1">
              Mobile Number
            </label>
            <br />
            <input
              id="mobile1"
              type="text"
              placeholder="Enter Mobile Number"
              className="input"
              onChange={this.getMobileData}
              value={mobileNo}
            />
            <br />
            <label className="label" htmlFor="email1">
              Email
            </label>
            <br />
            <input
              id="email1"
              type="text"
              placeholder="Enter Email Id"
              className="input"
              onChange={this.getEmailData}
              value={emailId}
            />
            <br />
            <label className="label" htmlFor="password1">
              Password
            </label>
            <br />
            <input
              id="password1"
              type="password"
              placeholder="Enter Password"
              className="input"
              onChange={this.getPassData}
              value={password}
            />
            <br />
            <button className="reg-btn" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default FacultyRegister
