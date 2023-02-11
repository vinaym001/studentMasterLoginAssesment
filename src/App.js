import {Switch, Route} from 'react-router-dom'
import Register from './components/Register'
import MasterLogin from './components/MasterLogin'
import StudentLogin from './components/StudentLogin'
import Home from './components/Home'
import StudentSection from './components/StudentSection'
import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Register} />
      <Route exact path="/masterlogin" component={MasterLogin} />
      <Route exact path="/studentlogin" component={StudentLogin} />
      <Route exact path="/studentsection" component={StudentSection} />
      <Route exact path="/home" component={Home} />
    </Switch>
  </>
)

export default App
