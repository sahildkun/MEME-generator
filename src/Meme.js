import React from 'react'

function Meme() {
  return (
    <>
    <form action="" className=' mt-10 bg-white
    rounded-md
    shadow-xl
    border
    mx-4
    border-purple-500
    sm:w-auto
    sm:shadow-md
    sm:border-purple-500
    sm:
    '>
    <div className='grid grid-cols-1 p-10  gap-5
    sm:grid-cols-2

    
    '>
        <input type="text" placeholder='enter first word' className=' border-gray-400 border-2 
        rounded-md
        px-2
        focus:outline-none
        focus:border-purple-600
        
        
        '/>
        <input type="text" placeholder='enter second word' className=' border-gray-400 border-2 
        rounded-md
        px-2
        focus:outline-none
        focus:border-purple-600
        '/>
        <div className='grid '>
        <button className='bg-yellow-200  rounded
        border 
        
        my-5
        sm:bg-yellow-200
        sm:w-[91rem]
        sm:my-10
        '>
         GENERATE MEME
        </button>
    </div>
        
        
    </div>
    </form>
    <div>
        <button>

        </button>
    </div>
    </>
  )
}

export default Meme