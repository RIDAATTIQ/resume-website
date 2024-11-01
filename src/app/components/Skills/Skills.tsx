import React from 'react'

const Skills = () => {
  return (


    <div  id='skills' className='container pt-27'>
        <div className='grid md:grid-cols-2 gap 20 items center'>

            <div>
                <h2 className='text-5xl md:text-5xl'> 
                    TECHNOLOGIES I WORK WITH
                </h2>
                <p text-gray-500 pt-2>Data Scientist,Acme Inc.Design and impelement machine learning models to analyze large datasets and drive business decisions.
collaberate with cross functional terms to develop and launch new products features,
Provide technical guid</p>
            </div>

            <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
             <div className='space-y-2'>
            <div>
              <button className='text-6xl'> HARDSKILLS</button>
            <h2>TYPESCRIPT</h2>
            <h2>REACT.JS</h2>
            <h2>NEXT.JS</h2>
</div>
<div>
              <button className='text-6xl'> SOFTSKILLS</button>
            <h2>ACTIVE LEARNING</h2>
            <h2>SOFTSPOKEN</h2>
            <h2>TIMEMANAGEMENT</h2>
</div>

            
            </div>
            </div>
        </div>





</div>
    
    
    
  )
}

export default Skills