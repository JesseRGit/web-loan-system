import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";

interface IHomeState {
  data: any;
}

class Home extends React.Component<{}, IHomeState> {
  public render() {
    return (
    <div>
      <h1>Welcome to use Loan system!</h1>
      <div>You can use this to add, edit and remove loan system's equipment, users and loans.</div>
      <div>Start by clicking top left icon and selecting one of the sections.</div>
  </div>
  )
  }
}

export default Home;
