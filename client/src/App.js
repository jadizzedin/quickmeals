import React from 'react';
import './App.css';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
import data from './assets/data'



class App extends React.Component {
  state = {
    cardData: []
  }

  handleChange = (e) => {
  }

  componentDidMount = () => {
    this.setState(prevState => ({
      cardData: data
    }))
  }



    render() {
      console.log(this.state.cardData);
      return (
        <div className="App">
          <Header />
          <Main
          cardData={this.state.cardData}
          />
          <Footer />
        </div>
      );
    }
  }

export default App;
