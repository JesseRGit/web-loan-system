import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface ICountriesState {
  data: any;
}

class Countries_4b extends React.Component<{}, ICountriesState> {
  constructor(props) {
    super(props)
    this.state = {
      data: ['testitem'],
    }
  }
  public async componentDidMount() {
    console.log('inside componentDidMount');

    const fetchedData = await fetch('https://restcountries.eu/rest/v2/all');

    const data = await fetchedData.json();

    console.log('data is here: ', data);
    this.setState({ data });
  }
  public render() {
    return (
        <Paper>
          <h1>Countries_4b (remote)</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Population
                </TableCell>
                <TableCell>
                  Capital
                </TableCell>
                <TableCell>
                  Region
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.data.map((item, index, population, capital, region) =>
                (<TableRow>
                  <TableCell key={index}>
                    {item.name}
                  </TableCell>
                  <TableCell key={population}>
                    {item.population}
                  </TableCell>
                  <TableCell key={capital}>
                    {item.capital}
                  </TableCell>
                  <TableCell key={region}>
                    {item.region}
                  </TableCell>
                </TableRow>))}
            </TableBody>
          </Table>
        </Paper>
    )
  };
}

export default Countries_4b;
