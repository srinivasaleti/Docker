import React from 'react';
import { backend_url } from './config';

class App extends React.Component {
  state = { movies: [] };
  // componentDidMount = async () => {
  //   const resp = await fetch(backend_url + '/movies', { method: 'GET' });
  //   const data = await resp.json();
  //   this.setState({
  //     movies: data
  //   });
  // };
  render() {
    return (
      <div>Hello World</div>
      // <div className='App'>
      //   {this.state.movies.map((x, index) => (
      //     <li key={index}>{x.name + ' ' + x.hero}</li>
      //   ))}
      // </div>
    );
  }
}

export default App;
