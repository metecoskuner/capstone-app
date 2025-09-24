/* global submitAPI */
import React from "react";

function BookingForm({
  date, setDate,
  time, setTime,
  guests, setGuests,
  occasion, setOccasion,
  availableTimes,
  updateTimes,
  onFormSubmit,
  submitForm
}) {
  const handleDateChange = (e) => {
    setDate(e.target.value);
    updateTimes({ type: "update", date: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    
    // API’ye gönder ve başarılıysa confirmation sayfasına yönlendir
    if (submitForm) submitForm(formData);

    // Local diziyi güncelle
    if (onFormSubmit) onFormSubmit(formData);

    // Formu sıfırla
    setDate("");
    setTime("");
    setGuests(1);
    setOccasion("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "250px", gap: "15px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} required />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={e => setTime(e.target.value)} required>
        <option value="">-- Select --</option>
        {availableTimes.map(t => <option key={t} value={t}>{t}</option>)}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" id="guests" min="1" max="10" value={guests} onChange={e => setGuests(e.target.value)} required />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
        <option value="">-- Select --</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit">Make Your reservation</button>
    </form>
  );
}

export default BookingForm;
