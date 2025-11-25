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
        title:'How does delivery works?', 
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti vel porro tempore mollitia ipsam suscipit delectus veritatis rerum repudiandae placeat! Consectetur provident at ipsum minima neque accusamus eum mollitia eius!', 
        isActive: true 
      },
      {
        title:'How much time does it takes to reach destination?', 
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum aspernatur eos, dolore hic sit, ullam deserunt odio molestias natus nihil aperiam voluptates assumenda soluta. Quibusdam, quod quisquam. Voluptate, pariatur fuga.', 
        isActive: false 
      },      
      {
        title:'How can i follow my delivery online?', 
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor eveniet beatae molestiae laboriosam voluptatem, delectus saepe doloremque tempore? Quam provident ipsam porro? Architecto temporibus voluptate vel placeat necessitatibus tempore eveniet.', 
        isActive: false 
      },      
      {
        title:'What to do if there is a delay in the delivery?', 
        answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae possimus dicta repellendus doloribus doloremque inventore sunt adipisci suscipit repellat, quisquam dolore iure vitae animi voluptate ea est esse asperiores aut!', 
        isActive: false 
      },      
    ],
    isActive: true
  },
  {
    topic: 'Pickup', 
    questions: [
      {
        title:'firstQuestion1', 
        answer: 'Answer', 
        isActive: false 
      },
      {
        title:'secondQuestion1', 
        answer: 'Answer', 
        isActive: false 
      },      
      {
        title:'thirdQuestion1', 
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
        title:'firstQuestion2', 
        answer: 'Answer', 
        isActive: false 
      },
      {
        title:'secondQuestion2', 
        answer: 'Answer', 
        isActive: false 
      },      
      {
        title:'thirdQuestion2', 
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
        title:'firstQuestion3', 
        answer: 'Answer', 
        isActive: false 
      },
      {
        title:'secondQuestion3', 
        answer: 'Answer', 
        isActive: false 
      },      
      {
        title:'thirdQuestion3', 
        answer: 'Answer', 
        isActive: false 
      },      
    ],
    isActive: false
  },
]




const HelpPage = () => {

  const [questions, setQuestions] = useState<QuestionMenu[]>(questionMenu)

  const [selectedQuestionMenu, setSelectedQuestionMenu] = useState<QuestionMenu>(questionMenu[0])

  const [selectedSubQuestion, setSelectedSubQuestion] = useState<Question | null>(null)

  const handleChange = ( question: QuestionMenu ) => {    
    setSelectedQuestionMenu(question)
  }

  const handleShowAnswer = ( subQuestion: Question ) => {

    if (subQuestion.title !== selectedSubQuestion?.title) {
      setSelectedSubQuestion(subQuestion)
    } else {
      setSelectedSubQuestion(null)
    }
    
    
  }

  return (
    <div className='flex justify-center py-25'>
      <div className='flex border p-6 border-gray-400 rounded-xl gap-2'>

        <div className='flex flex-col w-80 px-2 gap-1'>
          <h1 className='titles font-bold text-xl mb-4'>Frequent Questions</h1>
          {
            questionMenu.map( question =>
              <div 
                key={question.topic} 
                className={`p-2 rounded ${ question.topic === selectedQuestionMenu.topic ? 'bg-[#0A84FF]' : '' } cursor-pointer`}
                onClick={ () => handleChange(question) }
                >
                <p className='titles'>{question.topic}</p>
              </div>
            )
          }
        </div>

        <div className='flex flex-col w-140 px-2'>
          <h1 className='titles font-bold text-xl mb-4'>Title</h1>
          {
            selectedQuestionMenu?.questions.map( question => 
              <div key={question.title} className='block'>
                <div className='cursor-pointer p-3 bg-gray-600' onClick={() => handleShowAnswer(question)}>
                  <p className='titles select-none tracking-widest'>{ question.title }</p>
                </div>
                <div className={`${question.title !== selectedSubQuestion?.title ? 'max-h-0' :  'max-h-25' } px-3 transition-all duration-500  bg-[#0a84ff1e] overflow-hidden`}>
                  <p className='titles text-sm py-3'>{ question.answer }</p>
                </div>
              </div>
            )
            
          }
        </div>

      </div>
    </div>
  )
}

export default HelpPage