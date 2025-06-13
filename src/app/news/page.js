"use client"

import NewsList from '@/component/NewsList'
import React, { useEffect, useState } from 'react'

const NewsPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  const [news, setNews] = useState()

  useEffect(() => {
    async function fetchNews(){
     const response =  await fetch('http://localhost:8080/news')

     if(!response.ok){
      setError('Failed to fetch news')
      setIsLoading(false)
     }

     const news = await response.json()
     setIsLoading(false)
     setNews(news)
    }

    fetchNews()
  }, [])

  if(isLoading){
    return <p>Loading...</p>
  }

  if(error){
    return <p>{error}</p>
  }

  let newsContent;

  if(news) {
    newsContent = <NewsList news={news}/>
  }

  return (
    <div>
      <p className='text-3xl text-center font-bold py-8'>News Page</p>
      {newsContent}
    </div>
  )
}

export default NewsPage