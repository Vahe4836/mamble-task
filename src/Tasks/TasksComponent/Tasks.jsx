import './Tasks.scss';


export default function Tasks() {
    return (
        <div className='tasks_div'>
            <div className='task'>
                <input type="checkbox" className='task_completed' />
                <div className='task_text'>
                    <p>Web development, C++ developer, Javascript developer</p>
                </div>
                <button className='delete_button'>x</button>
            </div>

        </div>
    )
}