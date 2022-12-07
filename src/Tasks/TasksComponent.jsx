import { useState } from "react";
import StartPageText from "./StartPageComponent/StartPageText";
import Tasks from "./TasksComponent/Tasks";



export default function TasksComponent(){

    const [flag, setflag] = useState(0);

    return(
        <article>
            {flag ? <StartPageText /> : <Tasks />}
        </article>
    )
}