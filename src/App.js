import { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <News pageSize={5} />
      </>
    )
  }
}
export default App;
