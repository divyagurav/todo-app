import TodoForm from "@/components/TodoForm";

export default function Home() {
  function addHandler(enteredTodoName) {
    console.log(enteredTodoName);
  }
  return (
    <>
      <TodoForm onAdd={addHandler}></TodoForm>
    </>
  );
}
