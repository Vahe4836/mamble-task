import './Form.scss';



export default function Form(){
    return(
        <div className="form">
            {/* Task */}
            {/* <form onChange={(evt) => { */}
                {/* evt.preventDefault();
            }}> */}
                <input type="text" placeholder="Write here" className="form_input" />
                <button className="form_button">Add</button>
            {/* </form> */}
        </div>
    )
}