// import { useState } from "react";
import StartPageText from "./StartPageComponent/StartPageText";
import Tasks from "./TasksComponent/Tasks";



export default function TasksComponent({ storedTodos, openPopUp, setOpenPopUp, onChange}) {


    return (
        <article>
            {
                storedTodos.length === 0 ?
                    <StartPageText /> :
                    <Tasks
                        storedTodos={storedTodos}
                        openPopUp={openPopUp}
                        setOpenPopUp={setOpenPopUp}
                        onChange={onChange}
                    /> 
            }
        </article>
    )
}