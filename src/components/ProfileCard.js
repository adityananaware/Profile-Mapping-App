import React from 'react';

function ProfileCard({ profile, setSelectedProfile }) {
  return (
    <div className="profile-card">
      <img src={profile.photo} alt={`${profile.name}'s photo`} />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <button onClick={() => setSelectedProfile(profile)}>Summary</button>
    </div>
  );
}

export default ProfileCard;