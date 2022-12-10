import './HideCompleted.scss';
import './HideCompletedMedia.scss';



export default function HideCompleted({ onHideCompleted, hiden, setHiden, }) {
    return (
        <div className='hide_completed_div'>
            <div className='hide_completed'>
                <input
                    type="checkbox"
                    className='hide_completed_checkbox'
                    checked={hiden}
                    onChange={(evt) => {
                        onHideCompleted(hiden);
                        setHiden(evt.target.checked);
                    }
                        
                    }
                />
                <span className='hide_completed_text'>Hide completed</span>
            </div>
        </div>
    )
}