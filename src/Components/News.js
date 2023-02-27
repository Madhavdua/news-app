import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';



const News = (props) => {

  const capatalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  const [article, setArticle] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  document.title = "Hindu Times - " + `${capatalize(props.category)}`;

  const updatePage = async () => {
    setLoading(true)
    props.setProgress(30);
    props.setProgress(40);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
    let data = await fetch(url);
    let parseData = await (data.json());
    console.log(parseData)
    
    props.setProgress(60);
    props.setProgress(70);
    setLoading(false)
    setTotalResults(parseData.totalResults)
    setArticle(parseData.articles)
    setPage(page + 1)
    props.setProgress(80);
    props.setProgress(100);
  }
  useEffect(() => {
    updatePage();
  }, [])

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page+1}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parseData = await (data.json());
    setLoading(false)
    setTotalResults(parseData.totalResults)
    setArticle(article.concat(parseData.articles))
  };


  return (
    <div>
      <h2 className='text-center' style={{marginTop:'4rem'}}>Top {capatalize(props.category)} Headlines</h2>

      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={article.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={article.length !== totalResults}
        loader={<Spinner />}
        endMessage={
          <p className='text-center'><b>Yay! You have seen it all</b></p>
        }>
        {/* <div className="row container  my-3"> */}
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {article.map((element) => {

            // return <div className="col-md-4 my-2" key={element.url}>
            return <div className="p-3" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} Url={element.url} />
            </div>
          })}
        </div>
      </InfiniteScroll>
    </div>
  )
}
News.defaultProps = {
  pageSize: 5,
  category: 'general',
}
export default News