import {Component} from 'react'
import {Link} from 'react-router-dom'
import {FaUserGraduate, FaChalkboardTeacher} from 'react-icons/fa'
import './Register.css'

const initialContactList = []
class Register extends Component {
  state = {
    name: '',
    password: '',
    isStudentClicked: false,
    isMasterClicked: false,
  }

  onCLicksIcon = () => {
    this.setState({
      isMasterClicked: false,
      isStudentClicked: true,
    })
  }

  onCLickmIcon = () => {
    this.setState({
      isMasterClicked: true,
      isStudentClicked: false,
    })
  }

  onSubmitForm = e => {
    e.preventDefault()
    const {name, password} = this.state
    const newUser = {
      name,
      password,
    }

    initialContactList.push(...initialContactList, newUser)

    localStorage.setItem('user', JSON.stringify(initialContactList))
  }

  onNameChange = e => {
    this.setState({name: e.target.value})
  }

  onPasswordChange = e => {
    this.setState({password: e.target.value})
  }

  renderStudentRegister = () => {
    const {name, password} = this.state
    return (
      <div>
        <FaUserGraduate size={50} />

        <form onSubmit={this.onSubmitForm}>
          <input
            type="text"
            placeholder="Enter Roll Number"
            onChange={this.onNameChange}
            value={name}
          />
          <br />
          <input
            type="password"
            placeholder="enter password"
            onChange={this.onPasswordChange}
            value={password}
          />
          <br />
          <button type="submit">Submit</button>
          <Link to="/studentlogin">sign-in</Link>
        </form>
      </div>
    )
  }

  renderMasterRegister = () => {
    const {name, password} = this.state
    return (
      <div>
        <FaChalkboardTeacher size={50} />
        <form onSubmit={this.onSubmitForm}>
          <input
            type="text"
            placeholder="enter name"
            onChange={this.onNameChange}
            value={name}
          />
          <br />
          <input
            type="password"
            placeholder="enter password"
            onChange={this.onPasswordChange}
            value={password}
          />
          <br />
          <button type="submit">Submit</button>
          <Link to="/masterlogin">sign-in</Link>
        </form>
      </div>
    )
  }

  render() {
    const {isMasterClicked, isStudentClicked} = this.state
    const masterIconClass = isMasterClicked ? 'active' : 'in-active'
    const studentIconClass = isStudentClicked ? 'active' : 'in-active'
    return (
      <div>
        <button
          type="button"
          className={studentIconClass}
          onClick={this.onCLicksIcon}
        >
          <FaUserGraduate size={50} />
        </button>
        <button
          type="button"
          className={masterIconClass}
          onClick={this.onCLickmIcon}
        >
          <FaChalkboardTeacher size={50} />
        </button>
        {isMasterClicked
          ? this.renderMasterRegister()
          : this.renderStudentRegister()}
      </div>
    )
  }
}

export default Register
