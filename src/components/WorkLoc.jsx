import React from "react";
import { Form, Button, DropdownButton, Dropdown } from "react-bootstrap";

class WorkLoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const countries = this.props.countries;
    const cities = this.props.cities;
    const countrySelected = this.props.countrySelected;
    const selectedCountry = this.props.selectedCountry;
    const selectedCity = this.props.selectedCity;

    return (
      <>
        <h3>Work Location</h3>
        <DropdownButton
          title="Country"
          onSelect={(e) => this.props.handleCountrySelect(e)}
        >
          {countries.map((country, _) => {
            return (
              <Dropdown.Item
                key={country.countryName}
                eventKey={country.countryName}
                active={country.countryName === selectedCountry.countryName}
              >
                {country.countryName}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>

        <DropdownButton
          title="city dropdown"
          onSelect={(e) => this.props.handleCitySelect(e)}
        >
          {countrySelected ? (
            cities.map((city, _) => {
              return (
                <Dropdown.Item
                  key={city}
                  eventKey={city}
                  active={city === selectedCity}
                >
                  {city}
                </Dropdown.Item>
              );
            })
          ) : (
            <Dropdown.Item>Select country first</Dropdown.Item>
          )}
        </DropdownButton>
      </>
    );
  }
}

export default WorkLoc;
