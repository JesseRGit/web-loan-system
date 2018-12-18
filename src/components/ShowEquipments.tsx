import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//import countries from '../countries';
//import Country from './Country';

import equipments from '../TestData';
import Equipment from './Equipment';

class ShowEquipments extends React.Component<{}, IEquipmentsState> {
  public render() {
    return (
        <Paper>
          <h1>Equipments</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Id
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {equipments.map(equipment => <Equipment prop1={equipment} />)}
            </TableBody>
          </Table>
        </Paper>
    )
  };
}

export default ShowEquipments;
