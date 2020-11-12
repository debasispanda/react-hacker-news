import { render, screen } from "@testing-library/react";
import NewsTable from "./NewsTable";

test("renders table headers", () => {
  render(<NewsTable news={[]} />);
  expect(screen.getByText(/Comments/i)).toBeInTheDocument();
  expect(screen.getByText(/Vote Count/i)).toBeInTheDocument();
  expect(screen.getByText(/Upvote/i)).toBeInTheDocument();
  expect(screen.getByText(/News Details/i)).toBeInTheDocument();
});
