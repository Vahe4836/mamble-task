import './HideCompleted.scss';
import './HideCompletedMedia.scss';



export default function HideCompleted({ onHideCompleted }) {
    return (
        <div className='hide_completed_div'>
            <div className='hide_completed'>
                <input
                    type="checkbox"
                    className='hide_completed_checkbox'
                    onClick={onHideCompleted}
                />
                <span className='hide_completed_text'>Hide completed</span>
            </div>
        </div>
    )
}