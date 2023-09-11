const ReservationCard = ({ name, date, time, guestNumber }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of Guests: {guestNumber}</p>
    </div>
  )
}

export default ReservationCard