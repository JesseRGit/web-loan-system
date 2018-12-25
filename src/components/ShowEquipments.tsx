import React from 'react';

// Import React Table
import ReactTable from 'react-table';
//import 'react-table/react-table.css';

const data = [
  {
    id: '001',
    name: 'Tablet',
    description: 'Very good tablet.'
  },
  {
  id: '002',
  name: 'Phone',
  description: 'Not so good Android.'
  }
]

interface IEquipmentsState {
  data: any;
}

class ShowEquipments extends React.Component <{}, IEquipmentsState> {
   public render() {
    const columns = [
    {
      Header: "Id",
      accessor: "id"
    },
    {
      Header: "Name",
      accessor: "name"
    },
    {
      Header: "Description",
      accessor: "description"
    }
    ]
    return (
      <div>
        <ReactTable columns={columns} >
        </ReactTable>
      </div>
    );
  }
}

export default ShowEquipments;
