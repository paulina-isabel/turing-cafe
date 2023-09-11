import './ReservationCard.css';

const ReservationCard = ({ name, date, time, guestNumber }) => {
  return (
    <div className="resy-card">
      <h2>{name}</h2>
      <p className='date'>{date}</p>
      <p className='time'>{time} pm</p>
      <p className='number'>Number of Guests: {guestNumber}</p>
      <button>Cancel</button>
    </div>
  );
};

export default ReservationCard;