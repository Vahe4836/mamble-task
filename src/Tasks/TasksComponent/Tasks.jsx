import TaskItem from './TaskItem/TaskItem';
import './Tasks.scss';


export default function Tasks({ todos, onDelete, onChange }) {
    return (
        <div className='tasks_div'>
            {
                todos.map((todo) => {
                    return (
                        <TaskItem
                            key={todo.id}
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