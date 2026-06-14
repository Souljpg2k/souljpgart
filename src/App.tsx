import { Bg, Bar } from './components'
import './index.css'

function App() {
  return (
    <>
      <div className='bg-c-black w-screen h-screen relative select-none'>
        <Bar />
        <Bg />
      </div>
    </>
  )
}

export default App