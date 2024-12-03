import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/navbar/navbar";
import "./Profile.css";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    dob: "",
    gender: "",
    favoriteArtists: "",
    aboutMe: "",
    profilePicture: "",
  });
  const [profileCreated, setProfileCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePictureChange = (e) => {
    setFormData({
      ...formData,
      profilePicture: URL.createObjectURL(e.target.files[0]),
    });
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    return (
      today.getFullYear() -
      birthDate.getFullYear() -
      (today <
      new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())
        ? 1
        : 0)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfileCreated(true);
  };

  return (
    <div className="profile-page-container">
      {/* Sidebar Navigation */}
      <NavBar />

      {/* Main Content */}
      <div className="profile-form-container">
        {!profileCreated ? (
          <form className="profile-form" onSubmit={handleSubmit}>
            <h2>Create Your Profile</h2>
            <label>
              Date of Birth:
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-binary</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label>
              Favorite Artists:
              <input
                type="text"
                name="favoriteArtists"
                value={formData.favoriteArtists}
                onChange={handleChange}
                placeholder="Ex: Taylor Swift, Drake"
                required
              />
            </label>
            <label>
              About Me:
              <textarea
                name="aboutMe"
                value={formData.aboutMe}
                onChange={handleChange}
                placeholder="Introduce yourself..."
                required
              />
            </label>
            <label>
              Profile Picture:
              <input
                type="file"
                accept="image/*"
                onChange={handlePictureChange}
                required
              />
            </label>
            <button type="submit">
              <strong>Create Profile</strong>
            </button>
          </form>
        ) : (
          <div className="profile-display">
            <h2>Your Profile</h2>
            <img
              src={formData.profilePicture}
              alt="Profile"
              className="profile-picture"
            />
            <p>
              <strong>Username:</strong> User123 (placeholder)
            </p>
            <p>
              <strong>Age:</strong> {calculateAge(formData.dob)}
            </p>
            <p>
              <strong>Gender:</strong> {formData.gender}
            </p>
            <p>
              <strong>Favorite Artists:</strong> {formData.favoriteArtists}
            </p>
            <p>
              <strong>About Me:</strong> {formData.aboutMe}
            </p>
            <p>
              <strong>Rating:</strong> ⭐⭐⭐⭐☆ (placeholder)
            </p>
            <button onClick={(e) => setProfileCreated(false)}>
              <strong>Edit Profile</strong>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
