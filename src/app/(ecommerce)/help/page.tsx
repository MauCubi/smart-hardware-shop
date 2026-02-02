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
        title:'How does pickup works?', 
        answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, numquam ea. Saepe assumenda itaque mollitia earum ad autem ex, officia cum maxime, voluptatem optio laudantium iste reiciendis quisquam laborum aperiam.', 
        isActive: false 
      },
      {
        title:'Who can pickup my product?', 
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, aut? Animi, cupiditate ut. Soluta aliquam accusantium adipisci, quisquam id corporis laborum molestias, quidem sapiente assumenda ducimus sint impedit quaerat repudiandae?', 
        isActive: false 
      },      
      {
        title:'Something is missing in my package', 
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo velit aperiam harum ipsam nam illo quidem temporibus voluptatibus et, distinctio praesentium obcaecati voluptates debitis odit incidunt delectus? Voluptate, aperiam molestias.', 
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
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ullam quis? Voluptas quo architecto aperiam ipsum voluptates adipisci? Vel aperiam nesciunt exercitationem quia culpa deserunt sed, similique officia? Nulla, illum?', 
        isActive: false 
      },
      {
        title:'secondQuestion2', 
        answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque at, repellat laboriosam nulla veniam minus architecto consequatur et est natus itaque aliquid autem eaque nisi praesentium fugit, commodi, assumenda ab?', 
        isActive: false 
      },      
      {
        title:'thirdQuestion2', 
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quam debitis ut aliquam unde sapiente officiis voluptatum, a cumque fugiat cupiditate laborum, consectetur in odio molestias, commodi tenetur ad facilis?', 
        isActive: false 
      },      
    ],
    isActive: false
  },
  {
    topic: 'Payments', 
    questions: [
      {
        title:'firstQuestion3', 
        answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit unde eius sunt voluptas ipsa at temporibus delectus architecto repudiandae itaque ipsam sapiente, asperiores labore? Ab voluptates voluptatum placeat at eligendi?', 
        isActive: false 
      },
      {
        title:'secondQuestion3', 
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio velit hic, optio ab, blanditiis illum enim omnis consequatur rem eos corrupti iusto doloribus odio dolorem fuga laudantium facere excepturi provident!', 
        isActive: false 
      },      
      {
        title:'thirdQuestion3', 
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nulla voluptate veniam? Commodi, dignissimos. Sequi neque quaerat voluptas tempore culpa consectetur commodi accusantium placeat officia, eum delectus nulla unde qui.', 
        isActive: false 
      },      
    ],
    isActive: false
  },
  {
    topic: 'Devolutions', 
    questions: [
      {
        title:'firstQuestion4', 
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci et quam maiores expedita excepturi ipsa. Facere, nobis voluptatem! Perspiciatis, delectus quasi debitis eum natus placeat totam magnam incidunt quibusdam?', 
        isActive: false 
      },
      {
        title:'secondQuestion4', 
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veniam doloribus assumenda quidem reprehenderit consequatur exercitationem accusamus eveniet vitae quaerat voluptate sint, maiores maxime neque magnam cum deserunt consequuntur nisi.', 
        isActive: false 
      },      
      {
        title:'thirdQuestion4', 
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi officiis saepe, vero aperiam cum nemo corrupti incidunt velit consequuntur officia aliquid deserunt voluptatibus explicabo sit maxime impedit ea in porro.', 
        isActive: false 
      },      
    ],
    isActive: false
  },
  {
    topic: 'About us', 
    questions: [
      {
        title:'firstQuestion5', 
        answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eius cumque fuga esse laboriosam cum odit, expedita magni nulla ullam ad. Quam dolorem impedit consectetur qui expedita voluptates soluta incidunt.', 
        isActive: false 
      },
      {
        title:'secondQuestion5', 
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium soluta eos inventore sed nihil labore alias reiciendis aliquid fugiat sunt amet pariatur earum praesentium corrupti totam, ad harum neque perspiciatis?', 
        isActive: false 
      },      
      {
        title:'thirdQuestion5', 
        answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, ab quaerat aperiam dignissimos eius cumque commodi consequatur placeat, sunt laudantium, saepe ipsam earum reiciendis ratione minima similique in. Porro, blanditiis?', 
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
    <div className='flex justify-center py-35'>
      <div className='flex xl:flex-row flex-col w-full xl:w-auto border p-6 border-gray-400 xl:rounded-xl gap-2'>

        <div className='flex flex-col w-full xl:w-80 px-2 gap-1'>
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

        <div className='flex flex-col w-full xl:w-140 px-2'>
          <h1 className='titles font-bold text-xl mb-4'>Title</h1>
          {
            selectedQuestionMenu?.questions.map( question => 
              <div key={question.title} className='block'>
                <div className='cursor-pointer p-3 bg-gray-600' onClick={() => handleShowAnswer(question)}>
                  <p className='titles select-none tracking-widest'>{ question.title }</p>
                </div>
                <div className={`${question.title !== selectedSubQuestion?.title ? 'max-h-0' :  'max-h-40 xl:max-h-25' } px-3 transition-all duration-500  bg-[#0a84ff1e] overflow-hidden`}>
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