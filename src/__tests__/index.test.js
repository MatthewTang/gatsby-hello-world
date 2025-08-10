import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Home from "../pages/index"

jest.mock("gatsby", () => ({
  ...jest.requireActual("gatsby"),
  Link: ({ to, ...rest }) => <a href={to} {...rest} />,
}))

test("renders Hello Gatsby!", () => {
  render(<Home />)
  expect(screen.getByText("Hello Gatsby!")).toBeInTheDocument()
})
