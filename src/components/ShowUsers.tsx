import React from 'react';
import ReactTable from 'react-table';
import users from '../users';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

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
    users.splice(index, 1)
    this.setState(users)
  }

   public render() {
     const columns = [
     { Header: "Id", accessor: "id", style:{ textAlign: "Right" }, width:100, minWidth: 100, maxWidth: 100 },
     { Header: "Name", accessor: "name" },
     { Header: "Email", accessor: "email" },
     { Header: "Actions", filterable: false,
       style:{ textAlign: "Right" }, width:100,
       minWidth: 100, maxWidth: 100, Cell: props =>{
         return(
           <button onClick={() =>{
             //console.log("props", props)
             this.deleteRow(props.original.id);
           }}
           >
            <Icon><DeleteIcon /></Icon>
           </button>
         )}}]
    return (
      <div>
        <ReactTable
        columns={columns}
        data={users}
        filterable
        defaultPageSize={25}
        noDataText={"No data..."}
        showPagination={false}
        >
        </ReactTable>
      </div>
    );
  }
}

export default ShowUsers;
