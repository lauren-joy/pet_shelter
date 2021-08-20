import React, {useState} from "react";
import { Link } from "@reach/router";
import Form from "../components/Form";
import axios from "axios";
import { navigate } from "@reach/router";

const Create = (props) => {
  const [errors, setErrors] = useState([]);
  const onSubmitHandler = (e, data) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/pet/addnew", data)
      .then(res => {
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
      <Link to={"/"}>back to home</Link>
      </div>
      <h3>Know a pet needing a home?</h3>
      <div className="box">
        <Form onSubmitHandler={onSubmitHandler} initalName=""/>
      </div>
    </div>
  );
};

export default Create;