import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

import NewsItems from './NewsItems';
import Spinner from './Spinner';

class News extends Component {

  static defaultProps = {
    country: "us",
    category: "general",
    pageSize: 8
  }

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - WorldNews`
  }

  updateNews = async () => {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9a631ad58abc4fbbb2f69cb6a48b22ac&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    })
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9a631ad58abc4fbbb2f69cb6a48b22ac&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  render() {
    return (
      <>
        <h1 className="text-center my-3">World-News - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && < Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItems
                      title={element.title}
                      description={element.description}
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
  }
}

export default News;
