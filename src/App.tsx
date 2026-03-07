import { useState, useRef } from 'react'
import { SocialNav, Header, Window, Containers, Background } from './components'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const constraintsRef = useRef<HTMLDivElement>(null)
  const onToggle = () => setIsVisible(prev => !prev)
  return (
    <>
      <Header onToggle={onToggle} />

      <Containers>
        <SocialNav />
        <Background ref={constraintsRef} />
        <Window isVisible={isVisible} onToggle={onToggle} constraintsRef={constraintsRef} />
      </Containers>
    </>
  )
}

export default App