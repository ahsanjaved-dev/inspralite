import axios from "axios"
import { useState, useEffect } from "react"

export default function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/dummydata").then((response) => {
      setData(response.data)
    })
  }, [])

  return (
    <div style={{ padding: "20px", fontSize: "20px" }}>
      <h1>Hello</h1>
      <p>Your custom manual setup is working perfectly.</p>
      <ul>{data && data.map((item: any) => <li key={item.id}>{item.name}</li>)}</ul>
    </div>
  )
}
