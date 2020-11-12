import Dashboard from "./Dashboard";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router";

jest.mock("react-chartjs-2", () => ({
  Line: () => null,
}));

let container;

beforeEach(() => {
  const history = createMemoryHistory();
  container = render(
    <Router history={history}>
      <Dashboard />
    </Router>
  );
});

afterEach(() => {
  container.unmount();
});

test("renders NewsTable", () => {
  expect(document.querySelector(".NewsTable")).toBeInTheDocument();
});

test("renders Pagination", () => {
  expect(document.querySelector(".Pagination")).toBeInTheDocument();
});
