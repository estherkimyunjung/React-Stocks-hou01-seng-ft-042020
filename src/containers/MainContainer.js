import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    displayStocks: [],
    portfolioStocks: [],
    // filter: false,
    filter: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocks => {
      // console.log(stocks)
      this.setState({
        stocks: stocks,
        displayStocks: stocks
      })
    })
  }

  addStock = (stock) => {
    // debugger
    // console.log("MOVE STOCK", stock)
    if (this.state.portfolioStocks.includes(stock)){
      alert("This Stock is already in your profile lists")
    } else {
      this.setState({
        portfolioStocks: [...this.state.portfolioStocks, stock]
      })
    }
  }

  removeStock = (stock) => {
    this.setState({
      portfolioStocks: this.state.portfolioStocks.filter(st => st !== stock)
    })
  }

  filterStocks = (type) => {
    // debugger
    this.setState({
      displayStocks: this.state.stocks.filter(st => st.type === type )
    })
  }

  sortByName = (value) => {
    // debugger
    this.setState({
      displayStocks: this.state.displayStocks.sort((a,b) => a.name.localeCompare(b.name)),
      stocks: this.state.stocks.sort((a,b) => a.name.localeCompare(b.name)),
      // filter: !this.state.filter
    })
  }

  sortByPrice = (value) => {
    this.setState({
      displayStocks: this.state.displayStocks.sort((a,b) => a.price - b.price),
      stocks: this.state.stocks.sort((a,b) => a.price - b.price),
      // filter: !this.state.filter      
    })
  }

  render() {
    return (
      <div>
        <SearchBar 
          filterStocks={this.filterStocks}
          sortByName={this.sortByName}
          sortByPrice={this.sortByPrice}
          filter={this.state.filter} />
          <div className="row">
            <div className="col-8">
              <StockContainer 
                stocks={this.state.displayStocks}
                addStock={this.addStock} />
            </div>
            <div className="col-4">
              <PortfolioContainer 
              stocks={this.state.portfolioStocks} 
              removeStock={this.removeStock}/>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
