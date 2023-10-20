import TodoItem from "./todoItem";

function AllTodos(props) {
  return (
    <ul>
      <li>
        <TodoItem name={props.name}></TodoItem>
      </li>
    </ul>
  );
}

export default AllTodos;
