import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./pages/BookingForm";

test("BookingForm'da 'Choose date' etiketi render edilir", () => {
  render(
    <BookingForm
      date=""
      setDate={() => {}}
      time=""
      setTime={() => {}}
      guests={1}
      setGuests={() => {}}
      occasion=""
      setOccasion={() => {}}
      availableTimes={["17:00", "18:00"]}
      updateTimes={() => {}}
    />
  );
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});


test("form submit edildiğinde submitForm ve onFormSubmit çağrılır", () => {
  const mockSubmitForm = jest.fn();
  const mockOnFormSubmit = jest.fn();

  render(
    <BookingForm
      date="2025-09-25"
      setDate={() => {}}
      time="17:00"
      setTime={() => {}}
      guests={2}
      setGuests={() => {}}
      occasion="Birthday"
      setOccasion={() => {}}
      availableTimes={["17:00", "18:00"]}
      updateTimes={() => {}}
      submitForm={mockSubmitForm}
      onFormSubmit={mockOnFormSubmit}
    />
  );

  const submitButton = screen.getByText(/Make Your reservation/i);
  fireEvent.click(submitButton);

  expect(mockSubmitForm).toHaveBeenCalledWith({
    date: "2025-09-25",
    time: "17:00",
    guests: 2,
    occasion: "Birthday",
  });
  expect(mockOnFormSubmit).toHaveBeenCalledWith({
    date: "2025-09-25",
    time: "17:00",
    guests: 2,
    occasion: "Birthday",
  });
});
