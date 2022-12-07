import './Form.scss';



export default function Form() {
    return (
        <div className='form_div'>
            <div className="form">
                <form onChange={(evt) => {
                    evt.preventDefault();
                }}>

                    <p className='task_title'>Task</p>

                    <input type="text" placeholder="Write here" className="form_input" id='taskName' maxLength={54} />


                    <button className="form_button">Add</button>
                </form>
            </div>
        </div>
    )
}