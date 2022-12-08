import { useState } from 'react';
import './Form.scss';



export default function Form({onAdd}) {

    const [text, setText] = useState("");

    return (

        <div className='form_div'>
            <div className="form">
                <form onSubmit={(e) => {
                        e.preventDefault();
                        onAdd(text);
                        setText("");
                }}>

                <p className='task_title'>Task</p>

                <input
                    type="text"
                    value={text}
                    maxLength={54}
                    placeholder="Write here"
                    className="form_input"
                    onChange={(evt) => {
                        setText(evt.target.value);
                    }}
                />
                {/* <span>Task content can contain max 54 characters.</span> */}
                

                <button className="form_button">Add</button>
                {/* <span>Task content can contain max 54 characters.</span> */}
                </form>
                {/* <span>Task content can contain max 54 characters.</span> */}
            </div>
                    <span>Task content can contain max 54 characters.</span>
        </div>

    )
}