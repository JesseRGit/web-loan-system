import React from 'react';
import ReactTable from 'react-table';
import equipments from '../equipments';

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
        data={equipments}
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

export default ShowEquipments;
