import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends React.Component {
  constructor(){
    super();
  this.state = {
    myself: [],
    followers: [],
    error: ''
  }
}

componentDidMount() {
  axios.get('https://api.github.com/users/TBau23')
  .then(res => {
    console.log(res)
    this.setState({
      
      myself: res.data
    })
  })
  .catch(err => {
    console.log(err)
  })

  axios.get('https://api.github.com/users/TBau23/followers')
  .then(res => {
    console.log(res)
    this.setState({
      followers: res.data
    })
  })
  .catch(err => {
    console.log(err)
  })
}

render() {
  return (
    <div className="App">
      <h1 style={{color: 'white'}}>Github Usercards React Edition!!</h1>
      <div className='personal-card'>
        <img className='prof-pic' src={this.state.myself.avatar_url}/>
        <h2>{this.state.myself.name}</h2>
        <p>Username: {this.state.myself.login}</p>
        <p>Location: {this.state.myself.location}</p>
        <p style={{textDecoration: 'underline'}}>Github Contributions - Hover to Zoom In</p>
        <div className="git-contributions">
          <img src="https://ghchart.rshah.org/409ba5/TBau23" alt="TBau23's Blue Github Chart" />
        </div>
      </div>
      <h2 style={{color: 'white'}}>My followers: </h2>
      <div className='followers-list'>
      {this.state.followers.map(follower => (
        <div className='follower' key={follower}>
          <img src={follower.avatar_url} />
          <h2>Username: {follower.login}</h2>
        </div>
        
      ))}
      </div>
    </div>
  );
}
}
export default App;
