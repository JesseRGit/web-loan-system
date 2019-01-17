import React from "react";
import { render } from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { equipments } from '../data';
import matchSorter from 'match-sorter';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

interface IEquipmentsState {
  equipments: any;
}

class ShowEquipments extends React.Component <{}, IEquipmentsState> {
  constructor() {
    super();
    this.state = {
      data: equipments
    };
    this.renderEditable = this.renderEditable.bind(this);
  }

  deleteRow(id){
    const index = equipments.findIndex(equipment =>{
      return equipment.id === id
    })
    if (window.confirm("Accept remove")) {
      equipments.splice(index, 1)
      this.setState({ equipments })
  }
}

addRow() {
    const newData = { id: 'INSERT ID', name: 'INSERT NAME', description: 'INSERT DESCRIPTION' };
    equipments.push(newData);
    this.setState({ equipments })
}

renderEditable(cellInfo) {
  return (
    <div
      //style={{ backgroundColor: "#fafafa" }}
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
        <AddIcon /> ADD EQUIPMENT
      </Button>
      <ReactTable
        data={data}
        columns={[
          {
          Header: "Id",
          id: "id",
          style: { display: "flex" , flexDirection: "column", justifyContent: "center" },
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
          Header: "Equipment",
          id: "name",
          style: { display: "flex" , flexDirection: "column", justifyContent: "center" },
          accessor: d => d.name,
          filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value,
            { keys: ["name"] }),
          filterAll: true,
          Cell: this.renderEditable
          },
          {
          Header: "Description",
          id: "description",
          style: { display: "flex" , flexDirection: "column", justifyContent: "center" },
          accessor: d => d.description,
          filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value,
            { keys: ["description"] }),
          filterAll: true,
          Cell: this.renderEditable
        },
        {
          //Delete icon
          sortable: false,
          filterable: false,
          style: { display: "flex" , flexDirection: "column", justifyContent: "center" },
          style:{ textAlign: "Center" },
          width:50,
          minWidth: 50, maxWidth: 50,
          Cell: props =>{
            return(
              <IconButton>
                <DeleteIcon size="large" style={{ maxWidth: '20px', minWidth: '20px', minHeight: '20px', maxHeight: '20px' }}
                  onClick={() =>{ this.deleteRow(props.original.id); }}>
                </DeleteIcon>
              </IconButton>
            )}}
        ]}
        defaultPageSize={20}
        filterable
        noDataText={"No data..."}
        className="-striped -highlight"
      />
    </div>
  );
}
}

export default ShowEquipments;
