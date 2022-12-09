import './PopUp.scss';



export default function PopUp({ todo, openPopUp, setOpenPopUp, onDelete }) {
    return (
        <div
            className="pop_up_opacity_div"
            style={{display: openPopUp ? "block" : "none" }}
            onClick={() => {
                setOpenPopUp(false)
            }}
        >
            <div className="pop_up_div">
                <div className='pop_up_elemets_flex'>
                    <div className='pop_up_elements'>
                        <div className="pop_up_title">
                            <p>Are you sure you want to delete?</p>
                        </div>
                        <div className="pop_up_answer_div_flex">
                            <div className='pop_up_answer_div'>
                                <p
                                    className="pop_up_answer_text"
                                    onClick={() => {
                                        onDelete(todo)
                                        setOpenPopUp(false)
                                    }} 
                                >Yes</p>
                                <p
                                    className="pop_up_answer_text"
                                    onClick={() => {
                                        setOpenPopUp(false)
                                    }}
                                >No</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}