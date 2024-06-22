import React, {useState} from "react";
import Todo from "../assets/direct-hit.png";

import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, tasks,status, handleDelete, handleUpdate}) => {
    
    return (
        <section className='task_column'>
            <h2 className='task_column_heading'>
                <img className='task_column_icon' src={icon} alt='' /> {title}
            </h2>
             {/* Map through tasks and display TaskCard for each task */}

            {tasks.map(
                (task, index) =>
                    task.status === status && (
                        <TaskCard
                            key={index}
                            title={task.task}
                            description={task.description}
                            tags={task.tags}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                            index={index}
                        />
                    )
            )}
        </section>
    );
};

export default TaskColumn;
