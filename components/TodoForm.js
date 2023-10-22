import React, { Fragment, useRef, useState } from "react";

import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
  const nameRef = useRef("");

  const submithandler = async (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    await props.onAdd(enteredName);
  };

  return (
    <Fragment>
      <div className={classes.todo}>
        <div>
          <header>
            <h3>Todo Form</h3>
          </header>
        </div>
        <div className={classes.form}>
          <form onSubmit={submithandler}>
            <label>Todo Name:</label>
            <input type="text" ref={nameRef}></input>

            <button type="submit">Add Todo</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default TodoForm;
