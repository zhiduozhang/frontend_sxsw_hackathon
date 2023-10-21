import { render, screen } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import App from "./App";

fetchMock.mockResponse(JSON.stringify({ message: "Hello World!" }));

test("renders hello world message", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello from backend!/i);
  expect(linkElement).toBeInTheDocument();
});
test("updates message state with response data", () => {
  render(<App />);
  const messageElement = screen.getByText(/Hello from backend!/);
  expect(messageElement).toBeInTheDocument();
});
