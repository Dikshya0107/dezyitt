import React, { Component } from "react";

import Pagination from "react-js-pagination";


 
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }
 
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }
 
  render() {
    return (
      <div >
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={3}
          totalItemsCount={25}
          pageRangeDisplayed={9}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}
 export default Page;