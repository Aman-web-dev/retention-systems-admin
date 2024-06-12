import React from 'react'

import CreateBusinessForm from '@/components/assets/createBusinessform'

function page() {
  return (
    <div className='min-h-screen flex flex-col '>
      

<h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white mt-8 text-center">Create Business</h2>

      <CreateBusinessForm buttonText='Create Business'/>
    </div>
  )
}

export default  page
