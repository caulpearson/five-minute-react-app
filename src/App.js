import { Component } from "react";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }
  componentDidMount(){
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({posts: json}))
  }
  render(){
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Blog Posts</h1>
        </div>
        <div className="card">
          <div className="card-header">
            Featured
          </div>
          <div className="card-body">
            <h5 className="card-title">Special Title</h5>
            <p className="supporting-text">The supporting text would be here</p>
            <a href="localhost:3000" className="btn btn-primary">Links Nowhere</a>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
