import './App.css'
import {Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cover from './components/Cover'
import StudentRegister from './components/StudentRegister'
import StudentLogin from './components/StudentLogin'
import FacultyRegister from './components/FacultyRegister'
import FacultyLogin from './components/FacultyLogin'
import FacultySection from './components/FacultySection'

const App = () => (
  <>
    <Route exact path="/" component={Cover} />
    <Route exact path="/student-register" component={StudentRegister} />
    <Route exact path="/student-login" component={StudentLogin} />
    <Route exact path="/faculty-register" component={FacultyRegister} />
    <Route exact path="/faculty-login" component={FacultyLogin} />
    <Route exact path="/faculty-section" component={FacultySection} />
  </>
)

export default App
