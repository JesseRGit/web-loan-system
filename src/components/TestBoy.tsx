import React from "react";
import { render } from "react-dom";
import ReactTable from "react-table";
import { users } from '../data';
import matchSorter from 'match-sorter';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

interface IUsersState {
  data: any;
}

class ShowUsers extends React.Component<{}, IUsersState> {
  constructor() {
    super();
    this.state = {
      data: users
    };
    this.renderEditable = this.renderEditable.bind(this);
  }

  deleteRow(id){
    //console.log("id", id)
    const index = users.findIndex(user =>{
      return user.id === id
    })
    if (window.confirm("Delete user?")) {
      users.splice(index, 1)
      this.setState(users)
  }
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
            Header: "Id",
            id: "id",
            accessor: d => d.id,
            style:{ textAlign: "Right" },
            width:100, minWidth: 100,
            maxWidth: 100,
            filterMethod: (filter, rows) =>
            matchSorter(rows, filter.value,
              { keys: ["id"] }),
              filterAll: true
            },
            {
            Header: "Name",
            id: "name",
            accessor: d => d.name,
            filterMethod: (filter, rows) =>
            matchSorter(rows, filter.value,
              { keys: ["name"] }),
              filterAll: true,
            Cell: this.renderEditable
            },
            {
            Header: "Email",
            id: "email",
            accessor: d => d.email,
            filterMethod: (filter, rows) =>
            matchSorter(rows, filter.value,
              { keys: ["email"] }),
              filterAll: true,
            Cell: this.renderEditable
          },
          {
          Header: "Delete",
          filterable: false,
          style:{ textAlign: "Center" }, width:70,
          minWidth: 70, maxWidth: 70, Cell: props =>{
            return(
                <button onClick={() =>{ this.deleteRow(props.original.id); }}>
                  <Icon><DeleteIcon /></Icon>
                </button>
            )}}
          ]}
          defaultPageSize={25}
          filterable
          noDataText={"No data..."}
          showPaginationTop
          showPaginationBottom={false}
          //className="-striped -highlight"
        />
      </div>
    );
  }
}
export default ShowUsers;
