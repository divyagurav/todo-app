import classes from "./todoItem.module.css";
function TodoItem(props) {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <li className={classes.list}>
            <div className={classes.input}>
              <input type="checkbox" />
              <h3 className={classes.head}>{todo.name}</h3>
            </div>
            <div className={classes.actions}>
              <button>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// return (
//   <li className={classes.list}>
//     <div className={classes.input}>
//       <input type="checkbox" />
//       <h3 className={classes.head}>{props.name}</h3>
//     </div>
//     <div className={classes.actions}>
//       <button onClick={deletehandler}>Delete</button>
//     </div>
//   </li>
// );
// return
// <Fragment>
//   {
//     props.todos.map((todo) => {
//       <ul>
//         <li className={classes.list}>
//           <div className={classes.input}>
//             <input type="checkbox" />
//             <h3 className={classes.head}>{todo.name}</h3>
//           </div>
//           <div className={classes.actions}>
//             <button onClick={deletehandler}>Delete</button>
//           </div>
//         </li>
//       </ul>;
//     });
//   }
// }

export default TodoItem;
