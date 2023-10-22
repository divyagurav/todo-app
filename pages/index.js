import TodoForm from "../components/TodoForm";

export default function Home() {
  async function addHandler(enteredTodoName) {
    console.log(enteredTodoName);

    const response = await fetch("/api/new", {
      method: "POST",
      body: JSON.stringify({
        name: enteredTodoName,
        status: "InComplete",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  }
  return (
    <>
      <TodoForm onAdd={addHandler}></TodoForm>
    </>
  );
}
