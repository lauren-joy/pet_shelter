import { navigate } from "@reach/router";
import React, { useState } from "react";

const Form = (props) => {
  const {
    onSubmitHandler,
    initialName,
    initialType,
    initialDescription,
    initialSkillOne,
    initialSkillTwo,
    initialSkillThree,
  } = props;
  const [name, setName] = useState(initialName);
  const [type, setType] = useState(initialType);
  const [description, setDescription] = useState(initialDescription);
  const [skillOne, setSkillOne] = useState(initialSkillOne);
  const [skillTwo, setSkillTwo] = useState(initialSkillTwo);
  const [skillThree, setSkillThree] = useState(initialSkillThree);

  return (
    <form
      onSubmit={(e) => {
        onSubmitHandler(e, { name, type, description, skillOne, skillTwo, skillThree });
      }}
    >
      
      <label>Name:</label>
      <br />
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <label>Type:</label>
      <br />
      <input
        type="text"
        name="type"
        value={type}
        onChange={(e) => {
          setType(e.target.value);
        }}
      />
      <br />
      <label>Description:</label>
      <br />
      <input
        type="text"
        name="description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <label>Skills (optional):</label>
      <br />
      <input
        type="text"
        name="tag"
        value={skillOne}
        onChange={(e) => {
          setSkillOne(e.target.value);
        }}
      />
      <input
        type="text"
        name="tag"
        value={skillTwo}
        onChange={(e) => {
          setSkillTwo(e.target.value);
        }}
      />
      <input
        type="text"
        name="tag"
        value={skillThree}
        onChange={(e) => {
          setSkillThree(e.target.value);
        }}
      />
      <br />
      <input type="submit" className="btn btn-primary btn2" />
    </form>
  );
};

export default Form;
