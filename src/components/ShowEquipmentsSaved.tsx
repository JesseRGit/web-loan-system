import React from "react";
import FilterableTable from "react-filterable-table";
//import "react-table/react-table.css";

const data = [
    { name: "Steve", age: 27, job: "Sandwich Eater" },
    { name: "Gary", age: 35, job: "Falafeler" },
    { name: "Greg", age: 24, job: "Jelly Bean Juggler" },
    { name: "Jeb", age: 39, job: "Burrito Racer" },
    { name: "Jeff", age: 48, job: "Hot Dog Wrangler" }
];

// Fields to show in the table, and what object properties in the data they bind to
const fields = [
    { name: 'name', displayName: "Name", inputFilterable: true, sortable: true },
    { name: 'age', displayName: "Age", inputFilterable: true, exactFilterable: true, sortable: true },
    { name: 'job', displayName: "Occupation", inputFilterable: true, exactFilterable: true, sortable: true }
];

interface IEquipmentsState {
  data: any;
}

class ShowEquipments extends React.Component <{}, IEquipmentsState> {
   public render() {
    return (
      <div>
      <FilterableTable
          namespace="People"
          initialSort="name"
          data={data}
          fields={fields}
          noRecordsMessage="There are no people to display"
          noFilteredRecordsMessage="No people match your filters!"
      />
      </div>
    );
  }
}

export default ShowEquipments;
