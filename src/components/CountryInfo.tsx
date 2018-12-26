import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import Router from 'next/router';

interface ICountriesState {
  data: any;
}

class CountryInfo extends React.Component<{}, ICountriesState> {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
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

    const country_name = Router.query.country_name;
    const countryData = this.state.data.filter(contry => contry.name === `${country_name}`);

    return (
        <Paper>
        <Link href="/countries4b"><Button color="inherit">Back</Button></Link>
          <h1>{country_name}</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Native name
                </TableCell>
                <TableCell>
                  Capital
                </TableCell>
                <TableCell>
                  Population
                </TableCell>
                <TableCell>
                  Region
                </TableCell>
                <TableCell>
                  Subregion
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {countryData.map((item, index, capital, population, region, subregion) =>
                (<TableRow>
                  <TableCell key={index}>
                    {item.nativeName}
                  </TableCell>
                  <TableCell key={capital}>
                    {item.capital}
                  </TableCell>
                  <TableCell key={population}>
                    {item.population}
                  </TableCell>
                  <TableCell key={region}>
                    {item.region}
                  </TableCell>
                  <TableCell key={subregion}>
                    {item.subregion}
                  </TableCell>
                </TableRow>))}
            </TableBody>
          </Table>
        </Paper>
    )
  };
}

export default CountryInfo;
