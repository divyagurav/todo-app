import AllTodos from "../components/Alltodos";

export default function All() {
  const name = localStorage.getItem("name");

  return (
    <>
      <AllTodos name={name}></AllTodos>
    </>
  );
}
