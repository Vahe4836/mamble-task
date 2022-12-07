import './HideCompleted.scss';



export default function HideCompleted() {
    return (
        <div className='hide_completed_div'>
            <div className='hide_completed'>
                <input type="checkbox" className='hide_completed_checkbox' />
                <span className='hide_completed_text'>Hide completed</span>
            </div>
        </div>
    )
}