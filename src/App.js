import React, { useState } from 'react';
import ProfileList from './components/ProfileList';
import MapComponent from './components/MapComponent';
import './App.css';

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <div className="App">
      <h1>Profile Mapping App</h1>
      <ProfileList setSelectedProfile={setSelectedProfile} />
      {selectedProfile && <MapComponent address={selectedProfile.address} />}
    </div>
  );
}

export default App;