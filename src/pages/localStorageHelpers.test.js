import { saveToLocalStorage, getFromLocalStorage } from "./localStorageHelpers";

beforeEach(() => {
  localStorage.clear();
});

test("saves reservation to localStorage", () => {
  const reservation = { date: "2025-09-25", time: "18:00", guests: 2, occasion: "Birthday" };
  saveToLocalStorage(reservation);

  const stored = JSON.parse(localStorage.getItem("reservations"));
  expect(stored).toContainEqual(reservation);
});

test("reads reservations from localStorage", () => {
  const reservation = { date: "2025-09-25", time: "18:00", guests: 2, occasion: "Birthday" };
  localStorage.setItem("reservations", JSON.stringify([reservation]));

  const result = getFromLocalStorage();
  expect(result).toContainEqual(reservation);
});
