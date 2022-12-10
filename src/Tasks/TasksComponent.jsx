// import { useState } from "react";
import StartPageText from "./StartPageComponent/StartPageText";
import Tasks from "./TasksComponent/Tasks";



export default function TasksComponent({todos, setTodo, openPopUp, setOpenPopUp, onChange, onDelete}) {

    // const [todosLength, setTodosLength] = useState(0);

    // setTodosLength(todos.length);

    localStorage.setItem("todos", JSON.stringify(todos));

    const storedTodos = JSON.parse(localStorage.getItem("todos"));

    return (
        <article>
            {
                storedTodos.length === 0 ?
                    <StartPageText /> :
                    <Tasks
                        todos={todos}
                        storedTodos={storedTodos}
                        // setStoredTodos={setStoredTodos}
                        // setTodo={setTodo}
                        openPopUp={openPopUp}
                        setOpenPopUp={setOpenPopUp}
                        // todosLength={todosLength}
                        onDelete={onDelete}
                        onChange={onChange}
                    /> 
            }
        </article>
    )
}