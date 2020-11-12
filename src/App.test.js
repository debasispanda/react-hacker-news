import { render } from "@testing-library/react";
import App from "./App";
import { createMemoryHistory } from "history";
import { Router } from "react-router";

jest.mock("react-chartjs-2", () => ({
  Line: () => null,
}));

test("redirects to first page", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(history.location.pathname).toBe("/0");
});
