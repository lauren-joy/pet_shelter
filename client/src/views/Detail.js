import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import DeleteButton from "../components/DeleteButton";
import { Link } from "@reach/router";
import {navigate} from '@reach/router'

const Detail = (props) => {
  const { id } = props;
  const [pet, setPet] = useState({});
  const [loaded, setLoaded] = useState(false);
  const returnHome = () => {
    navigate("/")
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pet/" + id + "/getone")
      .then((res) => {
        setPet(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {""}
      {loaded && (
        <div>
          <div className="header">
            <h1>Pet Shelter</h1>
            <Link to={"/"}>back to home</Link>
          </div>
          <div className="subheader">
            <h3>Details about: {pet.name}</h3>
            <DeleteButton 
              id={pet._id}
              onDeleteFunctionProp={() => returnHome(pet._id)}
            />
          </div>
          <div className="box">
            <p>Type: {pet.type}</p>
            <p>Desciption: {pet.description}</p>
            <p>
              Skills: {pet.skillOne} {pet.skillTwo} {pet.skillThree}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
