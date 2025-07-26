import React from "react"
import { Link } from "gatsby"

const Test = () => <h1>hi</h1>

export default function Home() {
  return (
    <div style={{ color: "purple" }}>
      <Link to="/about/">about</Link>
      <h1>Hello Gatsby!</h1>
      <p>test build</p>
      <Test />
    </div>
  )
}
