import React from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/index";
import "./App.css";
import Table from "./components/Table/index";
import axios from "axios";
import SearchBar from "./components/SearchBar";

function App() {
  //state hook gives reference to setState which is later referenced
  const [state, setState] = React.useState({
    base: [],
    employees: [],
  });
  React.useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=100")
      .then((response) => {
        console.log(response.data.results);
        // mapping out the reponse data for the img, name, email, date of birth and location
        const mapped = response.data.results.map((emp) => ({
          img: emp.picture.large,
          name: emp.name.first + " " + emp.name.last,
          email: emp.email,
          dob: emp.dob.date,
          location: emp.location.city + ", " + emp.location.state,
        }));
        // console logging the map aspect
        console.log(mapped);
        // input user changing the initial state
        setState({
          employees: mapped,
          base: mapped,
        });
      })
      // catch error with a console log
      .catch((error) => console.warn(error.message));
  }, []);
  // an event listener with the aspect of searching through
  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setState({
      ...state,
      employees: state.base.filter(
        (employee) =>
          employee.name.toLowerCase().includes(searchTerm) ||
          employee.location.toLowerCase().includes(searchTerm)
      ),
    });
  };
  const sortTable = (e) => {
    const key = e.target.textContent.toLowerCase();
    setState({
      ...state,
      employees: state.employees.sort((a, b) => (a[key] > b[key] ? 1 : -1)),
    });
  };

  return (
    <div className="App">
      <Wrapper>
        <Header />
        <SearchBar onChange={handleChange} />
        <Table employees={state.employees} sortTable={sortTable} />
      </Wrapper>
    </div>
  );
}

export default App;
