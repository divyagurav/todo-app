import classes from "./todoItem.module.css";
function TodoItem(props) {
  function deletehandler() {
    localStorage.removeItem("name");
  }

  return (
    <li className={classes.list}>
      <div className={classes.input}>
        <input type="checkbox" />
        <h3 className={classes.head}>{props.name}</h3>
      </div>
      <div className={classes.actions}>
        <button onClick={deletehandler}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;
