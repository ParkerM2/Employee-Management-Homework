import React, { useEffect, useState } from "react";
import API from "./../utils/API";
import SearchResults from "../components/SearchResults";
import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
// import Card from "../components/Card";
// import SearchForm from "../components/SearchForm";
// import Alert from "../components/Alert"
// import UserInfo from "../components/UserInfo";

const Search = props => {

  const [user, setUser] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  useEffect(() => {
    console.log("use effect runs")
    getRandomUsers()
  }, [])

  // make the api call for the list of users
  const getRandomUsers = async () => {
    const response = await API.getUserList()
    console.log(response.data.results)
    setUser(response.data.results)
  }

    
  const Console = () => {
    console.log(user.user)
  }
  // const handleInputChange = event => {
  //   this.setState({ search: event.target.value });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getRandomEmployee(this.state.search)
  //     .then(res => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       this.setState({ results: res.data.message, error: "" });
  //     })
  //     .catch(err => this.setState({ error: err.message }));
  // };
 
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Employee Directory</h1>
          <button onClick={Console}>Click Me</button>
          <SearchResults result={user} />
        </Container>
      </div>
    );
  }


export default Search;
