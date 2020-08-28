import React from "react";
import Wrapper from "./components/Wrapper/Wrapper";
// import Main from "./components/Main/Main";
import Header from "./components/Header/index";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Table from "./components/Table/index";
import axios from "axios";

function App() {
  const [state, setState] = React.useState({
    base: [],
    employees: [],
  });

  React.useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((response) => {
        // console.log(response.data.results);
        setState({
          employees: response.data.results,
          base: response.data.results,
        });
      })
      .catch((error) => console.warn(error.message));
  }, []);

  const handleChange = (e) => {
    const SearchTerm = e.target.value;

    setState({
      ...state,
      employees: state.base.filter((employee) =>
        employee.name.first.includes(SearchTerm)
      ),
    });
  };

  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Nav onchange={handleChange} />
        <Table employees={state.employees} />
      </Wrapper>
    </div>
  );
}

export default App;
