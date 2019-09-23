import React from 'react';
import './App.css';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';



class App extends React.Component {
  state = {

  }

  handleChange = (e) => {
  }

  componentDidMount = () => {
    }

    render() {
      return (
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      );
    }
  }

export default App;
