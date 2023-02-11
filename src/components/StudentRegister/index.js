import {Component} from 'react'
import Header from '../Header'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


class StudentRegister extends Component {
  state = {userDetails: ''}

  render() {
    return (
      <div className="bg-container">
        <Header />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default StudentRegister
