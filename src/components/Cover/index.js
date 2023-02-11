import {FaUserGraduate, FaChalkboardTeacher} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {
  BackgroundContainer,
  LogoImg,
  IconsContainer,
  Container,
} from './styledComponents'

const Cover = () => (
  <BackgroundContainer>
    <LogoImg
      src="https://www.spritle.com/images/logo.svg"
      alt="logo"
      className="logo"
    />
    <h1>Welcome...</h1>
    <Container>
      <IconsContainer>
        <div>
          <FaUserGraduate size={80} />
          <p>
            If you are Student click here to register
            <Link to="/student-register">Student Sign Up</Link>
          </p>
          <p>
            Already have an account? Click here to login
            <Link to="/student-login">Student Sign In</Link>
          </p>
        </div>
        <div>
          <FaChalkboardTeacher size={80} />
          <p>
            If you are Faculty click here to register
            <Link to="/faculty-register">Faculty Sign Up</Link>
          </p>
          <p>
            Already have an account? Click here to login
            <Link to="/student-login">Faculty Sign In</Link>
          </p>
        </div>
      </IconsContainer>
    </Container>
  </BackgroundContainer>
)

export default Cover
