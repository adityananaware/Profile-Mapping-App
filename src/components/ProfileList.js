import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';

function ProfileList({ setSelectedProfile }) {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Fetch profiles data (replace with actual API endpoint)
    axios.get('https://api.example.com/profiles')
      .then(response => setProfiles(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="profile-list">
      {profiles.map(profile => (
        <ProfileCard key={profile.id} profile={profile} setSelectedProfile={setSelectedProfile} />
      ))}
    </div>
  );
}

export default ProfileList;