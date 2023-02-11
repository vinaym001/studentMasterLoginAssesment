import './App.css'
import {Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cover from './components/Cover'
import StudentRegister from './components/StudentRegister'

const App = () => (
  <>
    <Route exact path="/" component={Cover} />
    <Route exact path="/student-register" component={StudentRegister} />
  </>
)

export default App
