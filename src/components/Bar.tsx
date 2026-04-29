import { bar } from '../assets'

interface BarProps {
    onToggle: () => void
}

function Bar({ onToggle }: BarProps) {
    return (
        <div className='w-screen h-10 relative flex justify-between items-center bg-bg-color font-bold px-8 z-50'>
            <p>SOULJPG</p>
            <img className='cursor-pointer'
                onClick={onToggle}
                src={bar}
                alt="info" />
        </div>
    )
}

export default Bar