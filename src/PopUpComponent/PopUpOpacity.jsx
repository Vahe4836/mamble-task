import PopUp from './PopUp';
import './PopUpOpacity.scss';



export default function PopUpOpacity({ todos,openPopUp,setOpenPopUp,onDelete }) {


    return (
        <div
            className="pop_up_opacity_div"
            style={{ display: openPopUp ? "block" : "none" }}
            onClick={() => {
                setOpenPopUp(!openPopUp)
            }}
        >

            {
                todos.map((todo) => {
                    return (
                        <>
                            <PopUp
                                todo={todo}
                                onDelete={onDelete}
                                openPopUp={openPopUp}
                                setOpenPopUp={setOpenPopUp}
                            />
                        </>
                    )
                })
            }

        </div>
    )
}