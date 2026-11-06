import bg from './assets/default.webp'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArtstation, faInstagram, faTwitter, faKoFi } from '@fortawesome/free-brands-svg-icons'
import { faLink, faInfinity } from '@fortawesome/free-solid-svg-icons'

interface Link {
    id: number
    name: string
    url: string
    icon: IconDefinition
}

const l: Link[] = [
    { id: 1, name: 'Artstation', url: 'https://www.artstation.com/souljpg', icon: faArtstation },
    { id: 2, name: 'Instagram', url: 'https://www.instagram.com/souljpgart/', icon: faInstagram },
    { id: 3, name: 'Twitter', url: 'https://x.com/souljpgart', icon: faTwitter },
    { id: 4, name: 'ko-fi', url: 'https://ko-fi.com/soul111', icon: faKoFi }
]

function App() {
    return (
        <>
            <main className='relative w-dvw h-dvh overflow-hidden bg-black text-white font-sans select-none'>
                <div className='w-dvw h-3/6 absolute'>
                    <h1 className='absolute px-10 py-4 sm:px-14 sm:py-8'>Home</h1>
                    <img className='w-full h-full object-cover pointer-events-none' src={bg} alt='bg' />

                    <div className='px-10 py-12 sm:px-14'>
                        <div className="p-2 flex relative w-fit">
                            <div className="absolute top-0 left-0">
                                <div className="w-4 h-1 bg-cyan-300" />
                                <div className="w-1 h-3 bg-cyan-300" />
                            </div>
                            <h1 className="sm:text-6xl text-4xl font-semibold tracking-tight">SOULJPGART</h1>
                            <div className="absolute bottom-0 right-0 flex flex-col items-end">
                                <div className="w-1 h-3 bg-cyan-300" />
                                <div className="w-4 h-1 bg-cyan-300" />
                            </div>
                        </div>

                        <div className='my-6 select-text selection:bg-cyan-300 selection:text-black'>
                            <h2 className='font-semibold'>Info</h2>
                            <div className='text-sm'>
                                <p>I draw illustration</p>
                                <p>Software: Clip Studio Paint</p>
                                <p>Tablet: Wacom One (CTL-472)</p>
                            </div>

                            <div className='py-4 leading-8'>
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faLink} />
                                    <h2 className='font-semibold'>Link</h2>
                                </div>
                                <div className='flex flex-wrap items-center space-x-4'>
                                    {l.map((links) => (
                                        <a
                                            key={links.id}
                                            href={links.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm transition-colors duration-500 ease-in-out hover:text-black hover:bg-cyan-300"
                                        >
                                            <FontAwesomeIcon icon={links.icon} />
                                            {links.name}
                                        </a>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-3 w-dvw flex justify-center text-white select-none'>
                    <FontAwesomeIcon icon={faInfinity} />
                </div>
            </main >
        </>
    )
}

export default App