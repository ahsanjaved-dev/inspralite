import axios from "axios"
import { useState, useEffect } from "react"
import "./index.css"
import { motion } from "framer-motion"

export default function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/dummydata").then((response) => {
      setData(response.data)
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6">
      <motion.h1
        className="text-4xl font-extrabold text-purple-700 mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Hello Tailwind & Framer Motion!
      </motion.h1>
      <motion.p
        className="mb-8 text-lg text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Animations and utility classes together!
      </motion.p>
      <motion.button
        className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Animated Button
      </motion.button>
      <div className="mt-10 w-full max-w-md">
        <ul className="divide-y divide-purple-200 bg-white shadow rounded-lg">
          {data &&
            data.map((item: any, idx: number) => (
              <motion.li
                key={item.id}
                className="p-4 hover:bg-purple-50 text-purple-800"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + idx * 0.1, duration: 0.5 }}
              >
                {item.name}
              </motion.li>
            ))}
        </ul>
      </div>
    </div>
  )
}
