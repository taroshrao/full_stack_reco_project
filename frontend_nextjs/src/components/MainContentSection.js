"use client"
import React, { useState } from 'react'
import InputForm from './InputForm'
import Recommendations from './Recommendations'

const MainContentSection = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [recommendations, setRecommendations] = useState([])

  const questionSubmitHandler = async (inputQuery) => {
    if (inputQuery.trim() === "") {
      setError("Type what you want to search")
      return
    }
    try {
      setLoading(true)
      setError(null)
      setRecommendations([])

      const response = await fetch("http://localhost:8000/api/recommend/", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ query: inputQuery })
      })

      if (!response.ok) {
        setError("Sorry, something went wrong")
        return
      }

      const data = await response.json()
      setRecommendations([data.recommendations])
     
    } catch (error) {
      console.error("Error: ", error)
      setError("Failed to perform the search")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='text-center'>
      <InputForm
        questionSubmitHandler={questionSubmitHandler}
        error={error}
        loading={loading}
      />
      <Recommendations
        recommendations={recommendations}
      />
    </section>
  )
}

export default MainContentSection