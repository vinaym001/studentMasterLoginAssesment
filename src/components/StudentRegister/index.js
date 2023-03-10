import {Component} from 'react'

import './index.css'

class StudentRegister extends Component {
  state = {
    name: '',
    rollNumber: '',
    DOB: '',
    gender: '',
    mobileNo: '',
    emailId: '',
    password: '',
  }

  getNameData = e => {
    this.setState({name: e.target.value})
  }

  getRollData = e => {
    this.setState({rollNumber: e.target.value})
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
      rollNumber,
      DOB,
      gender,
      mobileNo,
      emailId,
      password,
    } = this.state
    e.preventDefault()
    const newUser = {
      name,
      rollNumber,
      DOB,
      gender,
      mobileNo,
      emailId,
      password,
    }
    const storedUserDetails = JSON.parse(localStorage.getItem('StudentDetails'))
    const isValid = storedUserDetails.filter(
      eachItem => eachItem.rollNumber === rollNumber,
    )
    if (isValid.length !== 0) {
      alert('rollNumber already exists.')
    } else if (name === '') {
      alert('name field is required')
    } else if (password === '') {
      alert('password field is required')
    } else if (password.length < 5) {
      alert('password should be more than 5 characters')
    } else if (mobileNo === '') {
      alert('mobileNo field is required')
    } else if (DOB === '') {
      alert('DOB field is required')
    } else if (rollNumber === '') {
      alert('rollNumber field is required')
    } else if (emailId === '') {
      alert('emailId field is required')
    } else if (!emailId.includes('@')) {
      alert('provide valid email id')
    } else {
      const users = JSON.parse(localStorage.getItem('StudentDetails') || '[]')
      users.push(newUser)
      localStorage.setItem('StudentDetails', JSON.stringify(users))
      const {history} = this.props
      history.replace('/student-login')
    }
  }

  render() {
    const {
      name,
      rollNumber,
      DOB,
      mobileNo,
      gender,
      emailId,
      password,
    } = this.state
    return (
      <div className="bg-container">
        <div className="form-container">
          <h1 className="head">Sign Up</h1>
          <form className="form" onSubmit={this.onRegister}>
            <label className="label" htmlFor="name">
              Name
            </label>
            <br />
            <input
              id="name"
              type="text"
              placeholder="Enter Name"
              className="input"
              onChange={this.getNameData}
              value={name}
            />
            <br />
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
            <label className="label" htmlFor="dob">
              Date of Birth
            </label>
            <br />
            <input
              id="dob"
              type="date"
              placeholder="Enter Date of Birth"
              className="input"
              onChange={this.getDobData}
              value={DOB}
            />
            <br />
            <label className="label" htmlFor="gender" value={gender}>
              Gender
            </label>
            <label className="label" htmlFor="male">
              Male
            </label>
            <input
              id="male"
              type="radio"
              value="Male"
              name="gender"
              onChange={this.getGenderData}
            />
            <label className="label" htmlFor="female">
              Female
            </label>
            <input id="female" type="radio" value="Female" name="gender" />
            <br />
            <label className="label" htmlFor="mobile">
              Mobile Number
            </label>
            <br />
            <input
              id="mobile"
              type="text"
              placeholder="Enter Mobile Number"
              className="input"
              onChange={this.getMobileData}
              value={mobileNo}
            />
            <br />
            <label className="label" htmlFor="email">
              Email
            </label>
            <br />
            <input
              id="email"
              type="text"
              placeholder="Enter Email Id"
              className="input"
              onChange={this.getEmailData}
              value={emailId}
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
            <button className="reg-btn" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default StudentRegister
