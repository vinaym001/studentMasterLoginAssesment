import Header from './Header'

const StudentSection = () => {
  const dataFromLC = localStorage.getItem('data')
  const formatedData = JSON.parse(dataFromLC)
  return (
    <ul>
      {formatedData.map(eachItem => (
        <li>
          <p>{eachItem}</p>
        </li>
      ))}
    </ul>
  )
}

export default StudentSection
