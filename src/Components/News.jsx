import React, { Component } from 'react'
import NewsItems from './NewsItems';

export class News extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9a631ad58abc4fbbb2f69cb6a48b22ac&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    })
  }

  handlePrePage = async () => {
    console.log("Previous");

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9a631ad58abc4fbbb2f69cb6a48b22ac&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    })
  }

  handleNextPage = async () => {
    console.log("Next")
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9a631ad58abc4fbbb2f69cb6a48b22ac&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      })
    }

  }

  render() {
    return (
      <div className="container border my-5 ">
        <h1 className="text-center">NewsApp - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col" key={element.url}>
                <NewsItems title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            )
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrePage}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextPage}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News;
