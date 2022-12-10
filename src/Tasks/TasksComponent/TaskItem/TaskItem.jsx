import './TaskItem.scss';
import './TaskItemMedia.scss';



export default function TaskItem({ todo, display, todos, openPopUp, setOpenPopUp, onChange, onDelete }) {

    // const [openPopUp, setOpenPopUp] = useState(false);


    return (
        <div
            className='task_div'
            style={
                {
                    display: display ? "none" : "block",
                    // background: display ? "green" : "red"
                }

            }
        >
            <div
                className='task'
            >
                <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    className={todo.isCompleted ? 'task_completed_checkbox_false' : 'task_completed_checkbox_true'}
                    // style={{ background: URL(todo.isCompleted ? '../../../Icons/checkboxFalse.png' : '../../../Icons/checkboxTrue.png') }}
                    onChange={(evt) => {
                        onChange({
                            ...todo,
                            isCompleted: evt.target.checked
                        });
                        // setOpenPopUp(true);
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
                        // onDelete(todo)
                        setOpenPopUp(true)
                    }}
                    className='delete_button'
                ></div>
            </div>
        </div>
    )
}

//Web development, C++ developer, Javascript developer