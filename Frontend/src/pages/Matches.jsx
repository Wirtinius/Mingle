import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import createDate from "../handler/dateUtils";
import getUser from "../handler/currentUserUtils";
import getUsers from "../handler/getUsersUtils";
import { FaHeart } from "react-icons/fa6";
import { jwtDecode } from "jwt-decode";
import FormModal from "../components/FormModal";
import "./Matches.css";

function Matches() {
  const users = getUsers();
  const [authToken, setAuthToken] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [swipedUsers, setSwipedUsers] = useState([]);
  const [formData, setFormData] = useState({
    userId: "",
    partnerId: "",
    name: "",
    address: "",
    description: "",
    dateTime: "",
  });

  console.log(currentUser.id);

  useEffect(() => {
    let authToken = JSON.parse(window.localStorage.getItem("authToken"));
    let currentUser = jwtDecode(authToken);
    if (currentUser) {
      setCurrentUser(currentUser);
      setAuthToken(authToken);
    }
  }, []);

  const swiped = (direction, idToDelete) => {
    console.log("Removing: ", idToDelete);
    setSwipedUsers([...swipedUsers, idToDelete]);
  };

  const outOfFrame = (id) => {
    console.log(id + " left the screen");
    setSwipedUsers(swipedUsers.filter((userId) => userId !== id));
  };

  const toggleModal = (user) => {
    formData.partnerId = user._id;
    formData.userId = currentUser.id;
    console.log(user._id);
    setShowModal(!showModal);
  };

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e, partnerId) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/date`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Form data sent successfully");
        setFormData({
          name: "",
          address: "",
          description: "",
          dateTime: "",
        });
        toggleModal();
      } else {
        console.error("Failed to send form data");
      }
    } catch (error) {
      console.error("Error sending form data: ", error);
    }
  };

  return (
    <div className="matches">
      <div className="matches__cardContainer">
        {users.map((user) => (
          <TinderCard
            key={user.id}
            className="matches__swipe"
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, user.id)}
            onCardLeftScreen={() => outOfFrame(user.id)}
          >
            <div className="matches__card">
              <div
                className="matches__cardImage"
                style={{ backgroundImage: `url(${user.avatar})` }}
              ></div>
              <div className="matches__userInfo">
                <h3>
                  {user.name} {user.surname}
                </h3>
                <p>{user.age} years old</p>
              </div>
              <div className="matches__buttons">
                <button
                  onClick={() => toggleModal(user)}
                  className="matches__button matches__button--requestDate"
                >
                  Date
                </button>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>

      {showModal && (
        <FormModal
          closeModal={toggleModal}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default Matches;
