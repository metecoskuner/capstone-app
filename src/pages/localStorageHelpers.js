// LocalStorage'a yazma
export function saveToLocalStorage(reservation) {
  const existing = JSON.parse(localStorage.getItem("reservations")) || [];
  existing.push(reservation);
  localStorage.setItem("reservations", JSON.stringify(existing));
}

// LocalStorage'dan okuma
export function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem("reservations")) || [];
}
