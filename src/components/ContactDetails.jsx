import React from "react";
import {
  Form,
  Button,
  DropdownButton,
  Dropdown,
  InputGroup,
} from "react-bootstrap";

class ContactDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const countrySelected = this.props.countrySelected;
    const selectedCountry = this.props.selectedCountry;
    const countryCode = this.props.countryCode;
    const citySelected = this.props.citySelected;
    const selectedCity = this.props.selectedCity;
    const handleSubmit = this.props.handleSubmit
    return (
      <>
        <h3>*Contact details</h3>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Control placeholder={countrySelected ? selectedCountry.countryName : "Country"} disabled />

          <Form.Control placeholder={citySelected ? selectedCity : "City"} disabled />
        
          <Form.Control placeholder="Name" type="text" id="Name" value={this.props.name} onChange={this.props.handleChange} />  
          <Form.Control placeholder="Company" type="text" id="Company" value={this.props.company} onChange={this.props.handleChange}/>  
          <Form.Control placeholder="Email" type="text" id="Email" value={this.props.email} onChange={this.props.handleChange} />  
        <InputGroup className="mb-3">
          <InputGroup.Text id="country-code">
            {countrySelected ? countryCode : "--"}
          </InputGroup.Text>
          <Form.Control placeholder="mobile" id="Mobile" value={this.props.mobile} onChange={this.props.handleChange} />
        </InputGroup>
        <Button variant="primary" type="submit" active>Submit</Button>
        </Form>
      </>
    );
  }
}

export default ContactDetails;
