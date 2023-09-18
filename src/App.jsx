
import './App.css'
import Linechart from './Components/linechart/linechart'
// import DaisyNav from './Components/DaisiNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import Phone from './Components/Phones/Phone'
import PriceOptions from './Components/PriceOptions/PriceOptions'
function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-rose-600'>React Route</h1>
      <PriceOptions></PriceOptions>
      <Linechart></Linechart>
      <Phone></Phone>
      
    </>
  )
}

export default App
