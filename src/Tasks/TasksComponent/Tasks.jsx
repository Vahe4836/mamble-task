import PopUp from '../../PopUpComponent/PopUp';
import TaskItem from './TaskItem/TaskItem';
import './Tasks.scss';


export default function Tasks({ storedTodos, setTodo, openPopUp, setOpenPopUp, onChange, onDelete }) {



    return (
        <div className='tasks_div'>
            {
                storedTodos.map((todo) => {

                    let display = todo.display;

                    return (
                        <>
                            {/* <PopUp
                                openPopUp={openPopUp}
                                setOpenPopUp={setOpenPopUp}
                                onDelete={onDelete}
                                todo={todo}
                            /> */}

                            <TaskItem
                                key={todo.id}
                                // todos={todos}
                                display={display}
                                openPopUp={openPopUp}
                                setOpenPopUp={setOpenPopUp}
                                todo={todo}
                                onChange={onChange}
                                // onDelete={onDelete}
                            />

                        </>
                    )
                })
            }
        </div>
    )
}