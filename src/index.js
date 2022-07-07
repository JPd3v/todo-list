import "./style.css"
import Task from "./task"
import {renderOnload} from "./domManipulation"
import { pubsub } from "./pubSub"
import ProjectList from "./projectList"

document.addEventListener("DOMContentLoaded",()=>{
    renderOnload()
})
