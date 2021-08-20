import axios from "axios";
import React, { useState } from "react";

const DeleteButton = (props) => {
  const { id, onDeleteFunctionProp } = props;
  const deleteHandler = (e) => {
    axios
      .delete("http://localhost:8000/api/pet/" + id + "/delete")
      .then((res) => {
        onDeleteFunctionProp();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button className="btn btn-secondary btn2" onClick={deleteHandler}>
      Adpot
    </button>
  );
};

export default DeleteButton;
