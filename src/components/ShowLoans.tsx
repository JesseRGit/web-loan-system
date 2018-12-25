import React from 'react';
import ReactTable from 'react-table';
import loans from '../loans';

const columns = [
{ Header: "Id", accessor: "id", style:{ textAlign: "Right" }, width:100, minWidth: 100, maxWidth: 100 },
{ Header: "Equipment Id", accessor: "equipmentId", style:{ textAlign: "Right" }, width:100, minWidth: 100, maxWidth: 100 },
{ Header: "User Id", accessor: "userId", style:{ textAlign: "Right" }, width:100, minWidth: 100, maxWidth: 100 },
{ Header: "Begins", accessor: "begins", style:{ textAlign: "Right" } },
{ Header: "Ends", accessor: "ends", style:{ textAlign: "Right" } },
{ Header: "Returned", accessor: "returned", style:{ textAlign: "Right" } },
{ Header: "Actions", filterable: false, Cell: props =>{ return(<button className="">Delete</button>)}}]

interface ILoansState {
  data: any;
}

class ShowLoans extends React.Component <{}, ILoansState> {
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
        data={loans}
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

export default ShowLoans;
