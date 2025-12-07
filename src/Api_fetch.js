import { Component } from "react";

class Api_fetch extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }

  async componentDidMount() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    let response = await fetch(url);
    let parsedData = await response.json();
    this.setState({ data: parsedData, loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          this.state.data.map((item) => {
            return (
              <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

export default Api_fetch;
