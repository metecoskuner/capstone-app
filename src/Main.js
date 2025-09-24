/* global fetchAPI, submitAPI */
import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";


export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today); 
}


export function updateTimes(state, action) {
  if (action.type === "update") {
    return fetchAPI(new Date(action.date)); 
  }
  return state;
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

 
  const submitForm = (formData) => {
    if (submitAPI(formData)) { 
      navigate("/confirmed"); 
    } else {
      alert("Reservation failed. Please try again.");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              updateTimes={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/menu" element={<h2>Menu Page</h2>} />
        <Route path="/contact" element={<h2>Contact Page</h2>} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
