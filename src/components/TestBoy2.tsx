import React from "react";
import { render } from "react-dom";

// Import React Table
import ReactTable from "react-table";
//import "react-table/react-table.css";

const makeData = [
{ firstName: "Jack", lastName: "Jackson", age: 3, visits: 10, progress: 30, status: "single" },
{ firstName: "Boy", lastName: "Boysson", age: 5, visits: 11, progress: 40, status: "single" },
]

interface ITableState {
  data: any;
}

class App extends React.Component<{}, ITableState> {

  constructor() {
    super();
    this.state = {
      data: makeData
    };
    this.renderEditable = this.renderEditable.bind(this);
  }

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }
  public render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "First Name",
              accessor: "firstName",
              Cell: this.renderEditable
            },
            {
              Header: "Last Name",
              accessor: "lastName",
              Cell: this.renderEditable
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

//render(<App />, document.getElementById("root"));
export default App;
