import TaskItem from './TaskItem/TaskItem';
import './Tasks.scss';


export default function Tasks({ todos, openPopUp, setOpenPopUp, onDelete, onChange }) {

    return (
        <div className='tasks_div'>
            {
                todos.map((todo) => {
                    return (
                        <TaskItem
                            key={todo.id}
                            // todos={todos}
                            openPopUp={openPopUp}
                            setOpenPopUp={setOpenPopUp}
                            todo={todo}
                            onChange={onChange}
                            onDelete={onDelete}
                        />
                    )
                })
            }
        </div>
    )
}