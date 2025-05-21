import './App.css'
import { HiOutlineMenuAlt3 } from "react-icons/hi";



function App() {

  return (
    <>
      <div className='bg-[#181918] px-[20px]  md:px-[40px] py-[30px] min-h-screen'>
        <nav className='flex items-center justify-between'>
          <img src="/logo3.png" alt="" className='w-[50px] h-[50px]'/>
          <HiOutlineMenuAlt3 className='md:hidden text-[#fefefe] text-[40px]'/>
        </nav>
      </div>
    </>
  )
}

export default App
