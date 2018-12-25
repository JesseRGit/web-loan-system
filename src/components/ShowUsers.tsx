import React from 'react';
import ReactTable from 'react-table';
import users from '../users';

const columns = [
{ Header: "Id", accessor: "id", style:{ textAlign: "Right" }, width:100, minWidth: 100, maxWidth: 100 },
{ Header: "Name", accessor: "name" },
{ Header: "Email", accessor: "email" },
{ Header: "Actions", filterable: false, Cell: props =>{ return(<button className="">Delete</button>)}}]

interface IUsersState {
  data: any;
}

class ShowUsers extends React.Component <{}, IUsersState> {
  constructor(props) {
    super(props)
    this.state = {
      data: ['testitem'],
    }
  }
   public render() {
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
