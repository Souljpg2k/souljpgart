import bg from './assets/default.webp'

interface Link {
    id: number
    name: string
    url: string
}

const l: Link[] = [
    { id: 1, name: 'Artstation', url: 'https://www.artstation.com/souljpg' },
    { id: 2, name: 'Instagram', url: 'https://www.instagram.com/souljpgart/' },
    { id: 3, name: 'Twitter', url: 'https://x.com/souljpgart' },
    { id: 4, name: 'ko-fi', url: 'https://ko-fi.com/soul111' }
]

function App() {
    return (
        <>
            <main className='relative w-dvw h-dvh overflow-hidden bg-black text-white font-sans select-none'>
                <div className='w-dvw h-3/6 absolute'>
                    <div className='absolute px-10 py-4 sm:px-14 sm:py-8'>
                        <h1>Home</h1>
                        <span>01.</span>
                    </div>
                    <span className='absolute bottom-4 right-10 sm:right-14'>TH</span>
                    <img className='w-full h-full object-cover pointer-events-none' src={bg} alt='bg' />

                    <div className='px-10 py-12 sm:px-14'>
                        <h1 className="sm:text-6xl text-4xl font-semibold font-heading tracking-tight">SOULJPGART</h1>
                        <p>Illustrator</p>
                        <div className='my-6 select-text selection:bg-blue-400 selection:text-black'>
                            <div className='bg-linear-to-r from-blue-400 to-transparent w-fit pr-5 px-1'>
                                <h2 className='font-semibold'>Info</h2>
                            </div>
                            <div className='text-sm py-1'>
                                <p>I draw illustration</p>
                                <p>Software: Clip Studio Paint</p>
                                <p>Tablet: Wacom One (CTL-472)</p>
                            </div>

                            <div className='py-1 leading-1'>
                                <span className='material-symbols-outlined'>
                                    link
                                </span>
                                <div className='flex items-center space-x-4'>
                                    {l.map((links) => (
                                        <a
                                            key={links.id}
                                            href={links.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm transition-colors duration-500 ease-in-out hover:text-black hover:bg-blue-400"
                                        >
                                            {links.name}
                                        </a>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}

export default App