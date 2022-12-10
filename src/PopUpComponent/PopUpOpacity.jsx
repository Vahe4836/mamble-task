import PopUp from './PopUp';
import './PopUpOpacity.scss';

// Pop-up background component

export default function PopUpOpacity({ storedTodos, openPopUp,setOpenPopUp,onDelete }) {


    return (
        <div
            className="pop_up_opacity_div"
            style={{ display: openPopUp ? "block" : "none" }}
            onClick={() => {
                setOpenPopUp(!openPopUp)
            }}
        >

            {
                storedTodos.map((todo) => {
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