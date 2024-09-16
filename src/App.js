import React from 'react'
import Textform from './component/Textform';
import Navbar from './component/Navbar'




const App = () => {
  return (
    <div>
      <Navbar />
      <div className='container my-3'>
      <Textform heading="Enter the text to analyse"/>
      </div>
    </div>
  )
}

export default App
