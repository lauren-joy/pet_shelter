import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import DeleteButton from "../components/DeleteButton";
import axios from "axios";
import { navigate } from "@reach/router";
import "../App.css";

const Main = (props) => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pet/getall")
      .then((res) => {
        setPets(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const editButton = (id) => {
    navigate(id + "/update");
  };
  const displayButton = (id) => {
    navigate(id + "/getone");
  };

  return (
    <div className="wrapper">
      <div className="header">
        <h1>Pet Shelter</h1>
        <Link to={"/create"}>Add a Pet to the shelter</Link>
      </div>
      <h3>These pets are looking for a good home</h3>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Pet</th>
            <th>Type</th>
            <th>Actions avalialbe</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet, idx) => {
            return (
              <tr key={idx}>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td>
                  <button
                    className="detailbtn"
                    onClick={() => displayButton(pet._id)}
                  >
                    Details |
                  </button>
                  <button
                    className="editbtn"
                    onClick={() => editButton(pet._id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
