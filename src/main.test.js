import { initializeTimes, updateTimes } from "./Main";


global.fetchAPI = jest.fn();
global.submitAPI = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

test("initializeTimes should call fetchAPI and return available times", () => {
  const mockTimes = ["17:00", "18:00", "19:00"];
  fetchAPI.mockReturnValue(mockTimes);

  const result = initializeTimes();

  expect(fetchAPI).toHaveBeenCalled(); 
  expect(result).toEqual(mockTimes);   
});

test("updateTimes should call fetchAPI with selected date", () => {
  const mockTimes = ["18:00", "19:00"];
  fetchAPI.mockReturnValue(mockTimes);

  const action = { type: "update", date: "2025-09-25" };
  const result = updateTimes([], action);

  expect(fetchAPI).toHaveBeenCalledWith(new Date(action.date)); 
  expect(result).toEqual(mockTimes);
});
