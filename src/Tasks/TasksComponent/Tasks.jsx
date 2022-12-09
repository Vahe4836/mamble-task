import PopUp from '../../PopUpComponent/PopUp';
import TaskItem from './TaskItem/TaskItem';
import './Tasks.scss';


export default function Tasks({ todos,setTodo,openPopUp,setOpenPopUp,onChange,onDelete }) {

    return (
        <div className='tasks_div'>
            {
                todos.map((todo) => {

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
                                openPopUp={openPopUp}
                                setOpenPopUp={setOpenPopUp}
                                todo={todo}
                                onChange={onChange}
                            //  onDelete={onDelete}
                            />
                        </>
                    )
                })
            }
        </div>
    )
}