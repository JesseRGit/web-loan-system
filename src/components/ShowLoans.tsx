import React from "react";
import { render } from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { loans } from '../data';
import matchSorter from 'match-sorter';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

interface ILoansState {
  data: any;
}

class ShowLoans extends React.Component <{}, ILoansState> {
  constructor() {
    super();
    this.state = {
      data: loans
    };
    this.renderEditable = this.renderEditable.bind(this);
  }

  deleteRow(id){
    const index = loans.findIndex(loan =>{
      return loan.id === id
    })
    if (window.confirm("Accept remove")) {
      loans.splice(index, 1)
      this.setState({ loans })
  }
}

addRow() {
    const newData = { id: 'INSERT ID',
    equipmentId: 'INSERT EQUIPMENT ID',
    userId: 'INSERT USER ID',
    begins: 'INSERT START DATE',
    ends: 'INSERT END DATE',
    returned: "INSERT IF RETURNED ALREADY" };
    loans.push(newData);
    this.setState({ loans })
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
        <AddIcon /> ADD LOAN
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
          Header: "Device Id",
          id: "equipmentId",
          style: { display: "flex" , flexDirection: "column", justifyContent: "center" },
          accessor: d => d.equipmentId,
          filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value,
            { keys: ["deviceId"] }),
          filterAll: true,
          Cell: this.renderEditable
          },
          {
          Header: "User Id",
          id: "userId",
          style: { display: "flex" , flexDirection: "column", justifyContent: "center" },
          accessor: d => d.userId,
          filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value,
            { keys: ["userId"] }),
          filterAll: true,
          Cell: this.renderEditable
          },
          {
          Header: "Begins",
          id: "begins",
          style: { display: "flex" , flexDirection: "column", justifyContent: "center" },
          accessor: d => d.begins,
          filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value,
            { keys: ["begins"] }),
          filterAll: true,
          Cell: this.renderEditable
          },
          {
          Header: "Ends",
          id: "ends",
          style: { display: "flex" , flexDirection: "column", justifyContent: "center" },
          accessor: d => d.ends,
          filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value,
            { keys: ["ends"] }),
          filterAll: true,
          Cell: this.renderEditable
          },
          {
          Header: "Returned",
          id: "returned",
          style: { display: "flex" , flexDirection: "column", justifyContent: "center" },
          accessor: d => d.returned,
          filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value,
            { keys: ["returned"] }),
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

export default ShowLoans;
