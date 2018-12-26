import React from 'react';
import ReactTable from 'react-table';
import { users } from '../data';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import matchSorter from 'match-sorter';

interface IUsersState {
  data: any;
}

class ShowUsers extends React.Component <{}, IUsersState> {
  constructor(props) {
    super(props)
    this.state = {
      users: ['testitem'],
    }
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

editRow(id){
  //const users = [...this.state.users];
  //console.log("id", id)
  const index = users.findIndex(user =>{
    return user.id === id
  })
  if (window.confirm("Accept edit?")) {
    console.log("info", index)
    users[index] = { id: '100', name: 'Supa', email: 'Fast supa.' };
    this.setState(users)
  }
}
/*
let ids = [...this.state.ids];     // create the copy of state array
ids[index] = 'k';                  //new value
this.setState({ ids });            //update the value
*/

  public render() {
    const columns = [
      { Header: "Id",
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
      { Header: "Name",
      id: "name",
      accessor: d => d.name,
      filterMethod: (filter, rows) =>
      matchSorter(rows, filter.value,
        { keys: ["name"] }),
        filterAll: true
      },
      { Header: "Email",
      id: "email",
      accessor: d => d.email,
      filterMethod: (filter, rows) =>
      matchSorter(rows, filter.value,
        { keys: ["email"] }),
        filterAll: true
      },
      { Header: "Actions", filterable: false,
      style:{ textAlign: "Right" }, width:100,
      minWidth: 100, maxWidth: 100, Cell: props =>{
        return(
          <div>
            <button onClick={() =>{ this.editRow(props.original.id); }}>
              <Icon><EditIcon /></Icon>
            </button>
            <button onClick={() =>{ this.deleteRow(props.original.id); }}>
              <Icon><DeleteIcon /></Icon>
            </button>
          </div>
        )}}]

        return (
          <div>
          <ReactTable
          columns={columns}
          data={users}
          filterable
          defaultPageSize={25}
          noDataText={"No data..."}
          showPaginationTop
          showPaginationBottom={false}
          >
          </ReactTable>
          </div>
        );
      }
    }

    export default ShowUsers;
