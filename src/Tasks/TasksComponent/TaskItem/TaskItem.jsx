// import { useState } from 'react';
import './TaskItem.scss';



export default function TaskItem({ todo, todos, openPopUp, setOpenPopUp, onChange, onDelete }) {

    // const [openPopUp, setOpenPopUp] = useState(false);

    return (
        <div className='task_div'>
            <div className='task'>
                <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={(evt) => {
                        onChange({
                            ...todo,
                            isCompleted: evt.target.checked
                        });
                        // setOpenPopUp(true);
                    }}
                    className='task_completed_checkbox'
                />


                <div className='task_text'>
                    <p className='task_text_paragraph'>{todo.text}</p>
                </div>

                <div
                    onClick={() => {
                        onDelete(todo);
                        setOpenPopUp(true)
                    }}
                    className='delete_button'
                ></div>
            </div>
        </div>
    )
}

//Web development, C++ developer, Javascript developer