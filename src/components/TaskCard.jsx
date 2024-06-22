import React ,{useState}from "react";

import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ title,description ,tags, handleDelete, index }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedDescription, setEditedDescription] = useState(description);
    // Toggle between edit and view mode
    const toggleEdit = () => {
        setIsEditing(!isEditing);
      };
    
    // Save the edited task and toggle off edit mode
    const handleSave = () => {
        handleUpdate(index, { title: editedTitle, description: editedDescription });
        toggleEdit();
    };
    return (
        <article className="task_card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="task_input"
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="task_des"
          />
        </>
      ) : (
        <>
          <p className="task_text">{title}</p>
          <p className="task_des">{description}</p>
        </>
      )}

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected />
          ))}
        </div>
        <div className="task_card_actions">
          {isEditing ? (
            <button onClick={handleSave} className="task_save">
              Save
            </button>
          ) : (
            <button onClick={toggleEdit} className="task_edit">
              Edit
            </button>
          )}
          <div className="task_delete" onClick={() => handleDelete(index)}>
            <img src={deleteIcon} className="delete_icon" alt="Delete" />
          </div>
        </div>
      </div>
    </article>
    );
};

export default TaskCard;
