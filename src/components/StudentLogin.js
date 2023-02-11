import {Component} from 'react'

class StudentLogin extends Component {
  state = {name: '', password: ''}

  onSubmitForm = e => {
    e.preventDefault()
    const {name, password} = this.state
    const newUser = {
      name,
      password,
    }

    const getUser = localStorage.getItem('user')
    const userSaved = JSON.parse(getUser)
    const isValidUser = userSaved.filter(
      eachItem => eachItem.name === name && eachItem.password === password,
    )
    console.log(isValidUser)

    if (isValidUser.length !== 0) {
      const {history} = this.props
      history.replace('/studentsection')
      console.log('Successfully Logged In')
    } else {
      console.log('Invalid Login details')
    }
  }

  onNameChange = e => {
    this.setState({name: e.target.value})
  }

  onPasswordChange = e => {
    this.setState({password: e.target.value})
  }

  render() {
    const {name, password, initialContactList} = this.state
    return (
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
        <button type="submit">Sign in</button>
      </form>
    )
  }
}

export default StudentLogin
