import {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'
import './index.css'

class FacultySection extends Component {
  state = {leftOperand: '', operator: '', rightOperand: '', result: ''}

  onChangeLeftOpe = e => {
    this.setState({leftOperand: e.target.value})
  }

  onChangeOperator = e => {
    this.setState({operator: e.target.value})
  }

  onChangeRightOpe = e => {
    this.setState({rightOperand: e.target.value})
  }

  onAdd = e => {
    const {leftOperand, operator, rightOperand} = this.state
    const newAssignment = {
      leftOperand,
      operator,
      rightOperand,
    }
    e.preventDefault()

    const assignmentList = JSON.parse(
      localStorage.getItem('assignment') || '[]',
    )
    assignmentList.push(newAssignment)
    localStorage.setItem('assignment', JSON.stringify(assignmentList))
    const wordToNum = str => {
      const numWordList = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
      ]
      return str
        .toLowerCase()
        .split(' ')
        .reduce((acc, val) => {
          const index = numWordList.indexOf(val)
          return acc * 10 + index
        }, 0)
    }

    const wodsToNumLeftOpe = wordToNum(leftOperand)
    const wodsToNumRightOpe = wordToNum(rightOperand)
    const getValue = () => {
      switch (operator.toLowerCase()) {
        case 'times':
          return wodsToNumLeftOpe * wodsToNumRightOpe
        case 'divided_by':
          return Math.ceil(wodsToNumLeftOpe / wodsToNumRightOpe)
        case 'plus':
          return wodsToNumLeftOpe + wodsToNumRightOpe
        case 'minus':
          return wodsToNumLeftOpe - wodsToNumRightOpe
        default:
          return null
      }
    }
    const value = getValue()
    this.setState({result: value})
    const {result} = this.state
    const solutionList = JSON.parse(localStorage.getItem('solution') || '[]')
    const assSolutionList = {
      leftOperand,
      operator,
      rightOperand,
      result: value,
    }
    solutionList.push(assSolutionList)
    localStorage.setItem('solution', JSON.stringify(solutionList))
  }

  render() {
    const {leftOperand, operator, rightOperand, result} = this.state
    const storedSolutionList = JSON.parse(localStorage.getItem('solution'))
    return (
      <div className="bg-container">
        <div className="nav-bar">
          <Navbar bg="dark" variant="dark m-auto">
            <Container>
              <Navbar.Brand href="#home">SPRITLE</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">About</Nav.Link>
                <Nav.Link href="#features">Contact</Nav.Link>
                <Nav.Link href="#pricing">
                  <Link to="/faculty-login">
                    <button type="button" className="add-btn">
                      Logout
                    </button>
                  </Link>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
        <form className="form" onSubmit={this.onAdd}>
          <div className="col">
            <label htmlFor="leftoperand" className="label">
              Enter Left Operand
            </label>
            <input
              id="leftoperand"
              type="text"
              className="inputn"
              placeholder="Enter Left Operand"
              onChange={this.onChangeLeftOpe}
              value={leftOperand}
            />
          </div>
          <div className="col">
            <label htmlFor="operator" className="label">
              Enter Operator
            </label>
            <input
              id="operator"
              type="text"
              className="inputn"
              placeholder="Enter Operator"
              onChange={this.onChangeOperator}
              value={operator}
            />
          </div>
          <div className="col">
            <label htmlFor="rightoperand" className="label">
              Enter Right Operand
            </label>
            <input
              id="rightoperand"
              type="text"
              className="inputn"
              placeholder="Enter Right Operand"
              onChange={this.onChangeRightOpe}
              value={rightOperand}
            />
          </div>
          <div>
            <button type="submit" className="add-btn">
              Add to Assigment Log
            </button>
          </div>
        </form>
        <h1>Instructions</h1>
        <ul>
          <li>Use words instead of numbers. ex: "one" for 1</li>
          <li>For divider, use "divided_by" in operator Input</li>
          <li>
            After entering left, right operands and operator click on Add to
            Assigment log.
          </li>
        </ul>
        <ul>
          {storedSolutionList.map(eachItem => (
            <li>
              <p>{`${eachItem.leftOperand} ${eachItem.operator} ${eachItem.rightOperand} is equal to  ${eachItem.result}`}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default FacultySection
