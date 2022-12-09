import { useState } from 'react';
import './Form.scss';



export default function Form({ onAdd }) {

    const [text, setText] = useState("");

    const [errormsg, setErrorMsg] = useState(false);

    return (

        <div className='form_div'>
            <div className="form">
                <form onSubmit={(evt) => {
                    evt.preventDefault();
                    { ((!errormsg) && text.length !== 0) && onAdd(text); setText("") }
                }}>

                    <p className='task_title'>Task</p>

                    <input
                        type="text"
                        value={text}
                        placeholder="Write here"
                        className="form_input"
                        onChange={(evt) => {
                            setText(evt.target.value);
                            setErrorMsg(evt.target.value.length >= 10);
                        }}
                        style={{ border: errormsg ? '1px solid #FF3104' : '1px solid #FFCD04' }}
                    />

                    <button
                        className="form_button"
                        style={{opacity: errormsg ? '0.5' : '1'}}
                        disabled={errormsg}
                    >Add</button>
                </form>

            </div>

            <span className="error_text" style={{ visibility: errormsg ? 'visible' : 'hidden' }} >
                Task content can contain max 54 characters.
            </span>

        </div>

    )
}