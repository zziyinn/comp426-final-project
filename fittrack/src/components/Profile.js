// src/components/Profile.js Using Session Cookies
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/api/profile', { withCredentials: true })
      .then(response => setUser(response.data.user))
      .catch(error => console.error('Not authenticated:', error));
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {user ? <p>Welcome, {user.username}!</p> : <p>Please log in.</p>}
    </div>
  );
}

export default Profile;
