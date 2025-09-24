import React, { useState } from "react";
import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, updateTimes, submitForm, onFormSubmit }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Table Reservation</h1>
      <BookingForm
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        submitForm={submitForm} 
        onFormSubmit={onFormSubmit} // Eğer rezervasyon verilerini yerel dizide güncellemek istiyorsan
      />
    </div>
  );
}

export default BookingPage;
