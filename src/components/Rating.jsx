import React from 'react'
import StarRate from './StarRate'

const Rating = ( {listings = []} ) => {

  const renderItems = listings.map((item, index) => {

    const renderParagraph = item.description.map((question, paraDex) => {
        return (
          <div key={paraDex}>
            <p className='mb-10'>({paraDex+1}) {question}</p>
            <StarRate />
          </div>
        )
    })

    return (
        <div key={index} className='mb-20'>
            <h2 className='mb-10'>{index+1}. {item.title}</h2>
            {renderParagraph}
        </div>
    )
})

  return (
    <div className='mb-30'>
      {renderItems}
    </div>
  )
}

export default Rating