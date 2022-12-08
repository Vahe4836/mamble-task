import StartPageText from "./StartPageComponent/StartPageText";
import Tasks from "./TasksComponent/Tasks";



export default function TasksComponent({todos, onDelete, onChange}) {
 

    return (
        <article>
            {
                todos.length === 0 ?
                    <StartPageText /> :
                    <Tasks
                        todos={todos}
                        onDelete={onDelete}
                        onChange={onChange}
                    /> 
            }
        </article>
    )
}