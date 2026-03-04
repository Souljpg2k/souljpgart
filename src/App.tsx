import { useState, useRef } from 'react';
import { Nav, Header, Window, Containers } from './components';
import Bg from './components/Background';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const onToggle = () => setIsVisible(prev => !prev);
  return (
    <>
      <Header onToggle={onToggle} />

      <Containers>
        <Nav />
        <Bg ref={constraintsRef} />
        <Window isVisible={isVisible}
          onToggle={onToggle}
          constraintsRef={constraintsRef}
        />
      </Containers>
    </>
  )
}

export default App