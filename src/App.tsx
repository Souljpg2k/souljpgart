import { useState, useRef } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Window from './components/Window';
import Containers from './components/Containers';
import Bg from './components/Background';

function App() {
  const [show, setShow] = useState<boolean>(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Header setShow={setShow} show={show} />

      <Containers>
        <Nav />
        <Bg ref={constraintsRef} />
        <Window show={show}
          setShow={setShow}
          constraintsRef={constraintsRef}
        />
      </Containers>
    </>
  )
}

export default App