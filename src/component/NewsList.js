import React from 'react'

const NewsList = ({ news }) => {
  
  console.log(news)

  return (
    <div className='grid grid-cols-2 gap-4 px-3'>
      {news.map((singleNews) => (
        <div key={singleNews.id} className='border border-gray-400 rounded-2xl p-8'>
          <p className='text-xl font-bold mb-3'>{singleNews.title}</p>
          <p>{singleNews.content}</p>
        </div>
      ))}
    </div>
  )
}

export default NewsList