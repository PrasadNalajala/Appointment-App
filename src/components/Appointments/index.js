// Write your code here
import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {title: '', date: '', appointmentList: [], showStarredList: false}

  onSubmit = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newItem = {
      title,
      date,
      isStarred: false,
      id: uuidv4(),
    }
    this.setState(prev => ({
      appointmentList: [...prev.appointmentList, newItem],
      title: '',
      date: '',
    }))
  }

  onChangeStar = id => {
    // console.log('hey')
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isStarred: !eachContact.isStarred}
        }
        return eachContact
      }),
    }))
  }

  onShowStarredList = () => {
    this.setState(prev => ({showStarredList: !prev.showStarredList}))
  }

  onAddTitle = event => {
    this.setState({title: event.target.value})
  }

  onAddDate = event => {
    this.setState({date: event.target.value})
  }

  render() {
    const {title, date, appointmentList, showStarredList} = this.state

    const filteredList = showStarredList
      ? appointmentList.filter(each => each.isStarred === true)
      : appointmentList

    const starredbtn = showStarredList ? 'starredbtn' : ''

    console.log(starredbtn)

    // console.log(filteredList)
    return (
      <div className="bg">
        <div className="card">
          <div className="Lgdevices">
            <form onSubmit={this.onSubmit}>
              <h1>Add Appointment</h1>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                onChange={this.onAddTitle}
                value={title}
              />
              <label htmlFor="date">Date</label>
              <input
                type="date"
                onChange={this.onAddDate}
                name="date"
                value={date}
                pattern="\d{4}/\d{2}/d{2}"
              />
              <br />
              <button type="submit">Add</button>
            </form>
            <div className="largeImg">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="imageLg"
              />
            </div>
          </div>
          <hr />
          <div className="appoinments">
            <h1>Appointments</h1>
            <button
              type="button"
              className={`btn ${starredbtn}`}
              onClick={this.onShowStarredList}
            >
              Starred
            </button>
          </div>
          <ul>
            {filteredList.map(each => (
              <AppointmentItem
                appointmentItem={each}
                key={each.id}
                onChangeStar={this.onChangeStar}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
