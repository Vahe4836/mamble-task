import { useReducer } from "react";
import Form from "../Form/Form";
import HideCompleted from "../HideCompletedComponent/HideCompleted";
import TasksComponent from "../Tasks/TasksComponent";
import './Main.scss';



function reducer(state, action) {
    if (action.type === "add") {
        return [
            {
                id: Math.random(),
                text: action.payload.text,
                isCompleted: false
            },
            ...state
        ];
    } else if (action.type === "delete") {
        return state.filter((t) => t.id !== action.payload.id);
    } else if (action.type === "clear-completed") {
        return state.filter((todo) => !todo.isCompleted);
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

    const [todos, dispatch] = useReducer(reducer, [
        // {
        //     id: Math.random(),
        //     text: "Learn JS",
        //     isCompleted: false
        // },
        // {
        //     id: Math.random(),
        //     text: "Learn CSS",
        //     isCompleted: false
        // },
        // {
        //     id: Math.random(),
        //     text: "Learn React",
        //     isCompleted: false
        // }
    ]);


    return (
        <div className="main_div">
            <div className="main">

                <HideCompleted
                    todos={todos}
                    onClearCompleted={() => {
                        dispatch({
                            type: "clear-completed"
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

                    onDelete={(todo) => {
                        dispatch({
                            type: "delete",
                            payload: {
                                id: todo.id
                            }
                        });
                    }}

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
    )
}