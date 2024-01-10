// Write your code here
import './index.css'

const DestinationItem = prop => {
  const {list} = prop
  const {name, imgUrl} = list
  return (
    <li className="card">
      <img src={imgUrl} className="img" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
