import './TaskItem.scss';
import './TaskItemMedia.scss';

// TaskItem component

export default function TaskItem({ todo, display, todos, openPopUp, setOpenPopUp, onChange }) {



    return (
        <div
            className='task_div'
            style={{ display: display ? "none" : "block" }}
        >
            <div className='task'>
                <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    className='task_completed_checkbox'
                    onChange={(evt) => {
                        onChange({
                            ...todo,
                            isCompleted: evt.target.checked
                        });
                    }}
                />


                <div className='task_text'>
                    <p
                        className='task_text_paragraph'
                        style={{ color: !todo.isCompleted ? '#666666' : '#ACACAC' }}
                    >{todo.text}</p>
                </div>

                <div
                    onClick={() => {
                        setOpenPopUp(!openPopUp)
                    }}
                    className='delete_button'
                ></div>
            </div>
        </div>
    )
}