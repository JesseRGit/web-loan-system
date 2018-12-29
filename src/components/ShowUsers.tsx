import React from "react";
import { render } from "react-dom";
import ReactTable from "react-table";
import { users } from '../data';
import matchSorter from 'match-sorter';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

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
    const index = users.findIndex(user =>{
      return user.id === id
    })
    if (window.confirm("Accept remove")) {
      users.splice(index, 1)
      this.setState({ users })
  }
}

addRow() {
    const newData = { id: 'INSERT ID', name: 'INSERT NAME', email: 'INSERT EMAIL@example.com' };
    users.push(newData);
    this.setState({ users })
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
        <Button onClick={() =>{ this.addRow(); }}>
          <Icon><AddIcon /></Icon> ADD USER
        </Button>
        <ReactTable
          data={data}
          columns={[
            {
            Header: "Id",
            id: "id",
            accessor: d => d.id,
            width:100, minWidth: 100,
            maxWidth: 100,
            filterMethod: (filter, rows) =>
            matchSorter(rows, filter.value,
              { keys: ["id"] }),
            filterAll: true,
            Cell: this.renderEditable
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
            //Delete icon
            sortable: false,
            filterable: false,
            style:{ textAlign: "Center" },
            width:50,
            minWidth: 50, maxWidth: 50,
            Cell: props =>{
              return(
                <IconButton style={{ maxWidth: '20px', minWidth: '20px', maxHeight: '20px', maxHeight: '20px' }}
                            onClick={() =>{ this.deleteRow(props.original.id); }}>
                  <DeleteIcon size="small"/>
                </IconButton>
            )}}
          ]}
          defaultPageSize={10}
          filterable
          noDataText={"No data..."}
          className="-highlight"
        />
      </div>
    );
  }
}
export default ShowUsers;
