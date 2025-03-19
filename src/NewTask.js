import React from "react";
import "./NewTask.css";



const photos = [
  { id: 1, src: "airpods.JPG", alt: "air" },
  { id: 2, src: "car.JPG", alt: "car" },
  { id: 3, src: "iphone.JPG", alt: "iphone" },
  { id: 4, src: "ring.JPG", alt: "ring" },
  { id: 5, src: "nike.JPG", alt: "nike" },
];
function NewTask({ newTask, handleChange, handleSubmit }) {
  

  const handlePhotoSelect = (photoSrc) => {
    handleChange({ target: { name: "photo", value: photoSrc } });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        name="title"
        placeholder="New task"
        value={newTask.title || ""}
        onChange={handleChange}
      />
      {!newTask.title ? null : (
        <>
          <textarea
            className="task-textarea"
            name="description"
            placeholder="Details..."
            value={newTask.description || ""}
            onChange={handleChange}
          />
          <div className="photos-container">
            {photos.map((photo) => (
              <img
                key={photo.id}
                src={photo.src}
                alt={photo.alt}
                className={`photo-option ${
                  newTask.photo === photo.src ? "selected" : ""
                }`}
                onClick={() => handlePhotoSelect(photo.src)}
              />
            ))}
          </div>
          <button className="task-button" type="submit">
            Add Wish
          </button>
        </>
      )}
    </form>
  );
}

export default NewTask;
