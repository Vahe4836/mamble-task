import { useState, useEffect, useReducer } from "react";
import Form from "../Form/Form";
import HideCompleted from "../HideCompletedComponent/HideCompleted";
// import PopUp from "../PopUpComponent/PopUp";
// import PopUpOpacity from "../PopUpOpacity.jsx/PopUpOpacity";
import TasksComponent from "../Tasks/TasksComponent";
import './Main.scss';
import './MainMedia.scss';



function reducer(state, action) {
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
        return state.map((todo) => {
            if (!action.payload.hiden) {
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



export default function Main() {

    const [todos, dispatch] = useReducer(reducer, []);

    const [openPopUp, setOpenPopUp] = useState(false);

    const [hiden, setHiden] = useState(false);

    // const [storedTodos, setStoredTodos] = useState();   

    // useEffect(() => {
    //     localStorage.setItem("todos", JSON.stringify(todos));
    // }, [todos.length]);

    // localStorage.setItem("todos", JSON.stringify(todos));


    // const [storedTodos, setStoredTodos] = useState(todos);

    // setStoredTodos(JSON.parse(localStorage.getItem("todos")))

    // let ob = localStorage.getItem("todos");

    // let loc = Object.values(ob)

    // let storedTodos = JSON.parse(localStorage.getItem("todos"));

    // alert(storedTodos);

    // {
    //     id: Math.random(),
    //     text: "Learn JS",
    //     isCompleted: false,
    //     display: false
    // },
    // {
    //     id: Math.random(),
    //     text: "Learn CSS",
    //     isCompleted: false,
    //     display: false
    // },
    // {
    //     id: Math.random(),
    //     text: "Learn React",
    //     isCompleted: false,
    //     display: false
    // }


    return (
        <>
            {/* <PopUp
                openPopUp={openPopUp}
                setOpenPopUp={setOpenPopUp}

                todo={todo}

                onDelete={(todo) => {
                    dispatch({
                        type: "delete",
                        payload: {
                            id: todo.id
                        }
                    });
                }}
            /> */}

            <div className="main_div">
                <div className="main">

                    <HideCompleted
                        // todos={todos}
                        // storedTodos={storedTodos}
                        hiden={hiden}
                        setHiden={setHiden}
                        onHideCompleted={(hiden) => {
                            dispatch({
                                type: "hide-completed",
                                payload: {
                                    hiden: hiden
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

                        todos={todos}

                        // storedTodos={storedTodos}
                        // setStoredTodos={setStoredTodos}
                        // setTodo={setTodo}
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

                        onDelete={(todo) => {
                            dispatch({
                                type: "delete",
                                payload: {
                                    id: todo.id
                                }
                            });
                        }}

                    />
                </div>
            </div>
        </>
    )
}