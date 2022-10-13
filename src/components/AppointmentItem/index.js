// Write your code here

import './index.css'

import {format} from 'date-fns'

const AppointmentItem = props => {
  const {appointmentItem, onChangeStar} = props
  const {title, date, isStarred} = appointmentItem
  const time = date ? format(new Date(date), 'dd MMMM yyyy, EEEE') : ''

  const imageUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const changeStar = () => {
    onChangeStar(appointmentItem.id)
  }

  return (
    <li className="appointmentContainer">
      <div className="titleContainer">
        <h1 className="title">{title}</h1>
        <p className="time">Date:{time}</p>
      </div>
      <button
        type="button"
        className="button"
        onClick={changeStar}
        testid="star"
      >
        <img src={imageUrl} alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem
