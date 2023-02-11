import {withRouter} from 'react-router-dom'

const Header = props => {
  const onLogOut = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <button type="button" onClick={onLogOut}>
      Logout
    </button>
  )
}

export default withRouter(Header)
