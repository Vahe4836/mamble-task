import Form from "../Form/Form";
import HideCompleted from "../HideCompletedComponent/HideCompleted";
import StartPageText from "../Tasks/StartPageComponent/StartPageText";
import TasksComponent from "../Tasks/TasksComponent";
import './Main.scss';



export default function Main() {
    return (
        <div className="main_div">
            <div className="main">
                <HideCompleted />
                <Form />
                <TasksComponent />
            </div>
        </div>
    )
}