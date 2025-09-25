/* global submitAPI */
import React, { useState } from "react";

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
  const [errors, setErrors] = useState({});

  const handleDateChange = (e) => {
    setDate(e.target.value);
    updateTimes({ type: "update", date: e.target.value });
  };

  // LocalStorage'a kaydetme fonksiyonu
  const saveToLocalStorage = (reservation) => {
    const existing = JSON.parse(localStorage.getItem("reservations")) || [];
    existing.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(existing));
  };

  // Form doğrulama
  const validate = () => {
    const newErrors = {};
    if (!date) newErrors.date = "Please select a date";
    if (!time) newErrors.time = "Please select a time";
    if (!guests || guests < 1) newErrors.guests = "At least 1 guest is required";
    if (guests > 10) newErrors.guests = "Maximum 10 guests allowed";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData = { date, time, guests, occasion };

    // API submit
    if (submitForm) submitForm(formData);

    // Parent component update
    if (onFormSubmit) onFormSubmit(formData);

    // LocalStorage'a kaydet
    saveToLocalStorage(formData);

    // Formu sıfırla
    setDate("");
    setTime("");
    setGuests(1);
    setOccasion("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "250px", gap: "15px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} required />
      {errors.date && <span style={{ color: "red" }}>{errors.date}</span>}

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={e => setTime(e.target.value)} required>
        <option value="">-- Select --</option>
        {availableTimes.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      {errors.time && <span style={{ color: "red" }}>{errors.time}</span>}

      <label htmlFor="guests">Number of guests</label>
      <input type="number" id="guests" min="1" max="10" value={guests} onChange={e => setGuests(e.target.value)} required />
      {errors.guests && <span style={{ color: "red" }}>{errors.guests}</span>}

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
