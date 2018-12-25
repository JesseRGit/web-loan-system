import React from 'react';

// Import React Table
import ReactTable from 'react-table';
//import 'react-table/react-table.css';

const data = [
  { id: '001', name: 'Tablet', description: 'Very good tablet.' },
  { id: '002', name: 'Phone', description: 'Not so good Android.' },
  { id: '003', name: 'Phablet', description: 'Too expensive phablet.' },
  { id: '004', name: 'Laptop', description: 'Good laptop.' }
]

const columns = [
{ Header: "Id", accessor: "id", style:{ textAlign: "Right" }, width:100, minWidth: 100, maxWidth: 100 },
{ Header: "Name", accessor: "name" },
{ Header: "Description", accessor: "description", filterable: false },
{ Header: "Actions", filterable: false, Cell: props =>{ return(<button className="">Delete</button>)}}]

interface IEquipmentsState {
  data: any;
}

class ShowEquipments extends React.Component <{}, IEquipmentsState> {
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
        data={data}
        filterable
        defaultPageSize={25}
        noDataText={"Please Wait..."}
        showPagination={false}
        >
        </ReactTable>
      </div>
    );
  }
}

export default ShowEquipments;
