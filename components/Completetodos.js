import classes from "./todoItem.module.css";
function CompleteTodos() {
  return (
    <>
      <li className={classes.list}>
        <div className={classes.input}>
          <h3 className={classes.head}>name</h3>
        </div>
        <div className={classes.actions}>
          <button>Delete</button>
        </div>
      </li>
    </>
  );
}

export default CompleteTodos;
