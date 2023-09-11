import './ReservationCard.css';

const ReservationCard = ({ name, date, time, guestNumber }) => {
  return (
    <div className="resy-card">
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of Guests: {guestNumber}</p>
      <button>Cancel</button>
    </div>
  );
};

export default ReservationCard;