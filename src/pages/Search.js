import React, { useEffect, useState } from "react";
import API from "./../utils/API";
import SearchResults from "../components/SearchResults";
import Container from "../components/Container";


const Search = props => {

  const [user, setUser] = useState([])
  const [females, setFemales] = useState([])
  const [males, setMales] = useState([])
 
  // calls api call when page loads and sets state
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
 
  const filterGenderFemale = async () => {
    const females = user.filter(res => res.gender === "female");
    console.log(females)
    setFemales(females)
  }

  const filterGenderMale = async () => {
    const males = user.filter(res => res.gender === "male");
    console.log(males)
    setMales(males)
  }

  return (
    <div>
      <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center">Employee Directory</h1>
        <button onClick={filterGenderFemale}>Female</button>
        <button onClick={filterGenderMale}>Male</button>
        <SearchResults result={user} />
        </Container>
    </div>
    );
}


export default Search;
