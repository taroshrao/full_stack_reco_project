import React from 'react'

const promptButtonsList = [
  {
    id: 1,
    prompt: "Suggest books about habits"
  },
  {
    id: 2,
    prompt: "Recommend movies like Inception"
  },
  {
    id: 3,
    prompt: "Find podcasts on AI safety"
  },
  {
    id: 4,
    prompt: "Courses for learning design"
  }
]

const PromptButtons = ({onPress}) => {
  return (
    <section className='mt-8 flex flex-wrap gap-3 justify-center'>
      {promptButtonsList.map((promptButton)=>{
        return (
          <button
            onClick={()=>onPress(promptButton.prompt)}
            key={promptButton.id}
            className='bg-primary text-text-primary/80 font-poppins text-lg px-6 py-1 tracking-wide rounded-full border border-text-primary/20 shadow-lg cursor-pointer hover:border-accent transition-all ease-in-out duration-300'
          >
            {promptButton.prompt}
          </button>
        )
      })}
    </section>
  )
}

export default PromptButtons