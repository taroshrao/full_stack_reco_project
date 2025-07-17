"use client"
import { useState } from "react"
import PromptButtons from "./PromptButtons"

const InputForm = ({questionSubmitHandler, error, loading}) => {
  const [inputValue, setInpuValue] = useState("")

  const promptClick = (inputStr) => {
    setInpuValue(inputStr)
  }

  return (
    <section className="w-[70%] mt-5 mx-auto">
      <div className="w-full flex items-center bg-primary rounded-full px-4 py-3 shadow-lg ring-2 ring-text-primary/40 hover:ring-accent transition ease-in-out duration-300">
        {/* Controlled Component */}
        <input
          type="text"
          placeholder="Search here..."
          onChange={(event) => setInpuValue(event.target.value)}
          value={inputValue}
          className="bg-transparent w-full text-text-primary placeholder:text-text-secondary placeholder:tracking-wider outline-none text-lg"
        />
        <button
          onClick={() => questionSubmitHandler(inputValue)}
          className="ml-4 text-lg font-semibold text-accent tracking-wide hover:brightness-110 transition-all cursor-pointer ease-in-out duration-300"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
      {error && (
        <p className="mt-4 text-error text-base tracking-wide italic">*{error}</p>
      )}
      <PromptButtons onPress={promptClick} />
    </section>
  )
}

export default InputForm