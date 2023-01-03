import React from "react";
import WorkLoc from "./components/WorkLoc";
import ContactDetails from "./components/ContactDetails";
import { DropdownButton, Form } from "react-bootstrap";
import { Dropdown } from "bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [
        {
          countryName: "India",
          countryCode: "+91",
          cities: ["pune", "mumbai", "nashik"],
        },
        {
          countryName: "USA",
          countryCode: "+1",
          cities: ["chicago", "LA", "texas"],
        },
        {
          countryName: "Russia",
          countryCode: "+7",
          cities: ["moscow", "Saint Petersburg"],
        },
      ],
      selectedCountry: {},
      countrySelected: false,
      citySelected: false,
      selectedCity: "",
      name: "",
      company: "",
      email: "",
      mobile: "",
      categories: [
        {
          categoryName: 'category xyz',
          subCategories: ["sub 1", "sub2", "sub3"]
        },
        {
          categoryName: 'category abc',
          subCategories: ["sub 11", "sub 12", "sub 13"]
        },
        {
          categoryName: 'category jkl',
          subCategories: ["sub 21", "sub 22", "sub 23"]
        }
      ],
      selectedCategory: '',
      categorySelected: false,
    };
    this.handleCountrySelect = this.handleCountrySelect.bind(this);
    this.handleCitySelect = this.handleCitySelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCategorySelect = this.handleCategorySelect.bind(this);
  }

  handleCountrySelect(event) {
    console.log(event);
    const searchIndex = this.state.countries.findIndex(
      (country) => country.countryName == event
    );
    console.log(this.state.countries[searchIndex]);
    this.setState({
      selectedCountry: this.state.countries[searchIndex],
      countrySelected: true,
    });
  }

  handleCitySelect(event) {
    console.log(event);
    this.setState({ selectedCity: event, citySelected: true });
  }
  handleCategorySelect(c) {
    console.log(c);
    this.setState({ selectedCategory: c, categorySelected: true });
  }
  handleChange(e) {
    switch (e.target.id) {
      case "Name":
        this.setState({ name: e.target.value });
        break;
      case "Company":
        this.setState({ company: e.target.value });
        break;
      case "Email":
        this.setState({ email: e.target.value });
        break;
      case "Mobile":
        this.setState({ mobile: e.target.value });
        break;
      default:
        break;
    }
  }
  handleSubmit(e) {
    console.log(e);
    e.preventDefault();
    window.alert("Your data has been submitted, we will get in touch soon");
  }

  render() {
    return (
      <div className="App">
        <br></br>
        <div>*Are you?</div>
        <Form>
          <Form.Check inline label="Individual" />
          <Form.Check inline label="Company" />
        </Form>
        
        <DropdownButton title="Select Category" >
          {this.state.categories.map((c, i)=> {
            return <DropdownItem onSelect={()=> this.handleCategorySelect(c.categoryName)} active={this.state.selectedCategory === c.categoryName} key={i}>{c.categoryName}</DropdownItem>
          })}
        </DropdownButton>
        <WorkLoc
          countries={this.state.countries}
          handleCountrySelect={this.handleCountrySelect}
          cities={this.state.selectedCountry.cities}
          countrySelected={this.state.countrySelected}
          selectedCountry={this.state.selectedCountry}
          handleCitySelect={this.handleCitySelect}
          selectedCity={this.state.selectedCity}
        />
        <br></br>
        <ContactDetails
          countrySelected={this.state.countrySelected}
          countryCode={this.state.selectedCountry.countryCode}
          selectedCountry={this.state.selectedCountry}
          citySelected={this.state.citySelected}
          selectedCity={this.state.selectedCity}
          name={this.state.name}
          email={this.state.email}
          company={this.state.company}
          mobile={this.state.mobile}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
