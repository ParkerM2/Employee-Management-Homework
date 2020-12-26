import React, { Component, useEffect, useState } from "react";
import API from "./../utils/API";
import SearchResults from "../components/SearchResults";
import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
// import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import Alert from "../components/Alert"
// import UserInfo from "../components/UserInfo";

const Search = props => {

  const [user, setUser] = useState({
    user: [],
  })
  const [userImg, setUserImg] = useState({
    userImg: [],
  })
  const [userGender, setUserGender] = useState({
    userGender: [],
  })
  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  useEffect(() => {
    console.log("useEffect runs")
    API.getUserList()
      .then(res => console.log(`This is api repsonse`, res.data))
      .then(res => setUser({user: res.data}))
      .catch(err => console.log(err));
  },[])

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
          <h1 className="text-center">Search By Breed!</h1>
          <h1>{user.user}</h1>
        
          {/* <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
          /> */}
          {/* <SearchResults user={user} userImg={userImg} userGender={userGender} /> */}
        </Container>
      </div>
    );
  }


export default Search;
