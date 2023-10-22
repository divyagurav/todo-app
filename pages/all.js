import { MongoClient } from "mongodb";
import React from "react";
import TodoItem from "@/components/todoItem";

// const todoName = [
//   {
//     name: "divya",
//   },
//   {
//     name: "john",
//   },
// ];
function All(props) {
  return (
    <>
      <TodoItem todos={props.todos}></TodoItem>
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://divyagurav:5gSUflVVVacyQ68h@cluster0.90uww8z.mongodb.net/todos?retryWrites=true&w=majority"
  );
  const db = client.db();
  const todosCollection = db.collection("todos");
  const todos = await todosCollection.find().toArray();
  client.close();
  return {
    props: {
      todos: todos.map((todo) => ({
        name: todo.name,
        id: todo._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default All;
