import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import Form from "../components/Form";
import axios from "axios";
import { navigate } from "@reach/router";

const Edit = (props) => {
  const { id } = props;
  const [errors, setErrors] = useState([]);
  const [pet, setPet] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pet/" + id + "/getone")
      .then((res) => {
        console.log(res);
        setPet(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);
  const onSubmitHandler = (e, data) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/pet/" + id + "/update", data)
      .then((res) => {
        navigate("/");
      })
      .catch(err =>{ 
        console.log(err.response);
        setErrors(err.response.data.errors);
      })
  };
  return (
    <div>
      <div className="header">
      <h1>Pet Shelter</h1>
      {errors.name ? <h4>{errors.name.message}</h4> : null}
      {errors.type ? <h4>{errors.type.message}</h4> : null}
      {errors.description ? <h4>{errors.description.message}</h4> : null}
      <Link to="/">back to home </Link>
      </div>
      <h3>Edit {pet.name}</h3>
      <div className="box">
        {loaded && (
          <Form
            onSubmitHandler={onSubmitHandler}
            initialName={pet.name}
            initialType={pet.type}
            initialDescription = {pet.description}
            initialSkillOne = {pet.skillOne}
            initialSkillTwo = {pet.skillTwo}
            initialSkillThree = {pet.skillThree}
          />
        )}
      </div>
    </div>
  );
};

export default Edit;
