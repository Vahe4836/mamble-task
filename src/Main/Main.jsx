import { useState,useReducer } from "react";
import Form from "../Form/Form";
import HideCompleted from "../HideCompletedComponent/HideCompleted";
import PopUpOpacity from "../PopUpComponent/PopUpOpacity";
import TasksComponent from "../Tasks/TasksComponent";
import './Main.scss';

// Reducers

function reducer(state,action) {
    if (action.type === "add") {
        return [
            {
                id: Math.random(),
                text: action.payload.text,
                isCompleted: false,
                display: false
            },
            ...state
        ];
    } else if (action.type === "delete") {
        return state.filter((t) => t.id !== action.payload.id);
    } else if (action.type === "hide-completed") {

        // 

        return state.map((todo) => {
            if (!action.payload.hidden) {
                if (todo.isCompleted) {
                    return {
                        ...todo,
                        display: true
                    }
                }
            } else {
                if (todo.isCompleted) {
                    return {
                        ...todo,
                        display: false
                    }
                }
            }
            return todo;
        });
    } else if (action.type === "update") {
        return state.map((todo) => {
            if (todo.id === action.payload.updatedTodo.id) {
                return action.payload.updatedTodo;
            }
            return todo;
        });
    }
}


// Main component


export default function Main() {

    const storedTodos = JSON.parse(localStorage.getItem("todos"));

    const [todos,dispatch] = useReducer(reducer, storedTodos);
    const [openPopUp,setOpenPopUp] = useState(false);
    const [hidden,setHidden] = useState(false);

    localStorage.setItem("todos",JSON.stringify(todos));



    return (
        <>

        {/* Pop-up background component */}

            <PopUpOpacity

                storedTodos={storedTodos}
                openPopUp={openPopUp}
                setOpenPopUp={setOpenPopUp}

                onDelete={(todo) => {
                    dispatch({
                        type: "delete",
                        payload: {
                            id: todo.id
                        }
                    });
                }}

            />


            <div className="main_div">
                <div className="main">

                    <HideCompleted
                        hiden={hidden}
                        setHiden={setHidden}
                        onHideCompleted={(hidden) => {
                            dispatch({
                                type: "hide-completed",
                                payload: {
                                    hidden: hidden
                                }
                            });
                        }}
                    />

                    <Form
                        onAdd={(text) => {
                            dispatch({
                                type: 'add',
                                payload: {
                                    text: text
                                }
                            });
                        }}
                    />

                    <TasksComponent

                        storedTodos={storedTodos}
                        openPopUp={openPopUp}
                        setOpenPopUp={setOpenPopUp}

                        onChange={(newTodo) => {
                            dispatch({
                                type: "update",
                                payload: {
                                    updatedTodo: newTodo
                                }
                            });
                        }}

                    />
                </div>
            </div>
        </>
    )
}