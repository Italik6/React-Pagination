import React from "react";
import Pagination from "./Pagination";

class App extends React.Component {
  constructor() {
    super();
    // an example array of items to be paged
    let exampleItems = [...Array(100).keys()].map(i => ({
      id: i + 1,
      name: "Item " + (i + 1)
    }));

    this.state = {
      exampleItems: exampleItems,
      pageOfItems: []
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h1>React - Pagination</h1>
            {this.state.pageOfItems.map(item => (
              <div key={item.id}>{item.name}</div>
            ))}
            <Pagination
              items={this.state.exampleItems}
              onChangePage={this.onChangePage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
