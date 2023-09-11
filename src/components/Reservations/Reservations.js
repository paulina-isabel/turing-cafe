import './Reservations.css';
import ReservationCard from "../ReservationCard/ReservationCard";

const Reservations = ({ reservations }) => {
  const reservationCards = reservations.map((reservation) => {
    return <ReservationCard 
        id={reservation.id}
        key={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        guestNumber={reservation.number}
      />
  });

  return (
    <div className='resy-container'>
      {reservationCards}
    </div>
  );
};

export default Reservations;