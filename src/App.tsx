import { useState } from 'react'
import { Bar, Background, Social, Window } from './components'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const onToggle = () => setIsVisible(prev => !prev)
  return (
    <>
      <Bar onToggle={onToggle} />
      <div className='w-full h-full relative flex items-center bg-bg-color'>
        <Social />
        <Window isVisible={isVisible} />
        <Background />
      </div>
    </>
  )
}

export default App
