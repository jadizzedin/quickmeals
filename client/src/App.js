import React from 'react';
import './App.css';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
import Filter from './components/filter';
import data from './assets/data';

class App extends React.Component {
  state = {
    cardData: [],
    activeFilter: false,
    search: ''
  }

  handleChange = async (e) => {
    const search = e.target.value;
    await this.setState(prevState => ({
      search: search
    }));
    console.log(this.state.search);
  }

  handleFilter = async (e) => {
    e.preventDefault();
    await this.setState(prevState => ({
      activeFilter: !prevState.activeFilter
    }))
  }

  componentDidMount = () => {
    this.setState(prevState => ({
      cardData: data
    }))
  }

    render() {
      return (
        <div className="App">
          <Header
            handleFilter={this.handleFilter}
            handleChange={this.handleChange}
          />
          <Filter
            activeFilter={this.state.activeFilter}
          />
          <Main
            cardData={this.state.cardData}
          />
          <Footer />
        </div>
      );
    }
  }

export default App;
