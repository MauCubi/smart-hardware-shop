'use client'
import { useState } from 'react';


interface Question {
  title: string,
  answer: string,
  isActive: boolean
}
interface QuestionMenu {
  topic: string,
  questions: Question[],
  isActive: boolean
}

const questionMenu: QuestionMenu[] = [
  {
    topic: 'Delivery', 
    questions: [
      {
        title:'firstQuestion', 
        answer: 'Answer', 
        isActive: true 
      },
      {
        title:'secondQuestion', 
        answer: 'Answer', 
        isActive: false 
      },      
      {
        title:'thirdQuestion', 
        answer: 'Answer', 
        isActive: false 
      },      
    ],
    isActive: true
  },
  {
    topic: 'Pickup', 
    questions: [
      {
        title:'firstQuestion', 
        answer: 'Answer', 
        isActive: false 
      },
      {
        title:'secondQuestion', 
        answer: 'Answer', 
        isActive: false 
      },      
      {
        title:'thirdQuestion', 
        answer: 'Answer', 
        isActive: false 
      },      
    ],
    isActive: false
  },
  {
    topic: 'Warranty', 
    questions: [
      {
        title:'firstQuestion', 
        answer: 'Answer', 
        isActive: false 
      },
      {
        title:'secondQuestion', 
        answer: 'Answer', 
        isActive: false 
      },      
      {
        title:'thirdQuestion', 
        answer: 'Answer', 
        isActive: false 
      },      
    ],
    isActive: false
  },
  {
    topic: 'About us', 
    questions: [
      {
        title:'firstQuestion', 
        answer: 'Answer', 
        isActive: false 
      },
      {
        title:'secondQuestion', 
        answer: 'Answer', 
        isActive: false 
      },      
      {
        title:'thirdQuestion', 
        answer: 'Answer', 
        isActive: false 
      },      
    ],
    isActive: false
  },
]



const HelpPage = () => {

  const [questions, setQuestions] = useState<QuestionMenu[]>(questionMenu)

  return (
    <div className='flex justify-center'>
      <div className='flex border p-6 border-gray-400 rounded-xl gap-2'>

        <div className='flex flex-col w-80 px-2 gap-1'>
          <h1 className='titles font-bold text-xl mb-4'>Frequent Questions</h1>
          {
            questions.map( question =>
              <div key={question.topic} className='p-2 rounded bg-[#0A84FF]'>
                <p className='titles'>{question.topic}</p>
              </div>
            )
          }
        </div>

        <div className='flex flex-col w-140 px-2'>
          <h1 className='titles font-bold text-xl'>Title</h1>
        </div>

      </div>
    </div>
  )
}

export default HelpPage