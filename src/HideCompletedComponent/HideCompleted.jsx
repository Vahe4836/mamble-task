import './HideCompleted.scss';
import './HideCompletedMedia.scss';

// Hide completed component

export default function HideCompleted({ onHideCompleted,hidden,setHidden}) {
    return (
        <div className='hide_completed_div'>
            <div className='hide_completed'>
                <div className='checkbox_text_div'>
                    <input
                        type="checkbox"
                        className='hide_completed_checkbox'
                        checked={hidden}
                        onChange={(evt) => {
                            onHideCompleted(hidden);
                            setHidden(evt.target.checked);
                        }}
                    />
                    <span className='hide_completed_text'>Hide completed</span>
                </div>
            </div>
        </div>
    )
}