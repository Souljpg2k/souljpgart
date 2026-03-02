import { useState, useRef } from 'react';
import { Nav, Header, Window, Containers } from './components';
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