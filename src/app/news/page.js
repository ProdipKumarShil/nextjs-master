// server side data fetching

import NewsList from '@/component/NewsList'

const NewsPage = async () => {
  const response = await fetch('http://localhost:8080/news')

  if(!response.ok){
    throw new Error('Failed to fetch news.')
  }
  
  const news = await response.json()

  return (
    <div>
      <p className='text-3xl text-center font-bold py-8'>News Page</p>
      <NewsList news={news} />
    </div>
  )
}

export default NewsPage