import './TaskItem.scss';



export default function TaskItem({ todo, onChange, onDelete }) {
    return (
        <div className='task'>
            <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={(evt) => {
                    onChange({
                        ...todo,
                        isCompleted: evt.target.checked
                    });
                }}
                className='task_completed'
            />


            <div className='task_text'>
                <p className='task_text_paragraph'>{todo.text}</p>
            </div>

            <div
                onClick={() => {
                    onDelete(todo);
                }}
                className='delete_button'
            ></div>
        </div>
    )
}

//Web development, C++ developer, Javascript developer