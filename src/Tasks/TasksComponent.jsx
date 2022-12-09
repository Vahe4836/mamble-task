// import { useState } from "react";
import StartPageText from "./StartPageComponent/StartPageText";
import Tasks from "./TasksComponent/Tasks";



export default function TasksComponent({todos, setTodo, openPopUp, setOpenPopUp, onChange, onDelete}) {

    // const [todosLength, setTodosLength] = useState(0);

    // setTodosLength(todos.length);

    return (
        <article>
            {
                todos.length === 0 ?
                    <StartPageText /> :
                    <Tasks
                        todos={todos}
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