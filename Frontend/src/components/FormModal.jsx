import { useRef, useEffect } from "react";
import "./FormModal.css";

function FormModal({ closeModal, formData, handleChange, handleSubmit }) {
  const modalRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, closeModal]);

  return (
    <div className="modal__overlay">
      <div className="modal__content" ref={modalRef}>
        <button className="modal__closeButton" onClick={closeModal}>
          x
        </button>
        <h2>Create Date</h2>
        <form onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Date Name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered input-primary w-full max-w-xs mt-5"
            />
          </div>
          <div className="form__group">
            <input
              type="text"
              id="address"
              name="address"
              placeholder="address"
              value={formData.address}
              onChange={handleChange}
              className="input input-bordered input-primary w-full max-w-xs mt-2"
            />
          </div>
          <div className="form__group">
            <input
              type="datetime-local"
              id="dateTime"
              name="dateTime"
              placeholder="Date Time"
              value={formData.dateTime}
              onChange={handleChange}
              className="input input-bordered input-primary w-full max-w-xs mt-2"
            />
          </div>
          <div className="form__group">
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="input input-primary w-full max-w-xs mt-2"
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FormModal;
