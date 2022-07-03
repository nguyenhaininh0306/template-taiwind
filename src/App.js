import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import { MainContainer } from './components/index.js'

function App() {
  return (
    <div className='w-screen h-auto flex flex-col bg-black'>
      <Header />

      <main className='mt-14 md:mt-20 px-4 md:px-16 py-6 w-full'>
        <Routes>
          <Route path='/' element={<MainContainer />} />
        </Routes>
      </main>

      <footer>
        {/** desktop */}
        <div className='hidden md:flex w-full bg-white items-center justify-between px-24 py-4'>
          <div className=''>
            <p className='text-base text-black font-semibold cursor-pointer'>
              2022 Creatives
            </p>
          </div>

          <div className='flex items-center justify-center gap-5'>
            <p className='text-base text-black font-semibold cursor-pointer'>
              Privacy Policy
            </p>
            <p className='text-base text-black font-semibold cursor-pointer'>
              Terms and Conditions
            </p>
          </div>
        </div>

        {/** mobile */}
        <div className='md:hidden flex flex-col items-center bg-black'>
          <div className='flex flex-col items-center justify-center mb-6'>
            <p className='text-sm text-white'>Privacy Policy</p>
            <p className='text-sm text-white'>Terms and Conditions</p>
          </div>

          <div>
            <p className='text-white text-lg font-semibold mb-6'>
              2022 Creatives
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
