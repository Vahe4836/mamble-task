import TaskItem from './TaskItem/TaskItem';
import './Tasks.scss';

// Tasks component

export default function Tasks({ storedTodos, openPopUp, setOpenPopUp, onChange}) {


    return (
        <div className='tasks_div'>
            {
                storedTodos.map((todo) => {

                    let display = todo.display;

                    return (
                        <>
                            <TaskItem
                                key={todo.id}
                                display={display}
                                openPopUp={openPopUp}
                                setOpenPopUp={setOpenPopUp}
                                todo={todo}
                                onChange={onChange}
                            />
                        </>
                    )
                })
            }
        </div>
    )
}