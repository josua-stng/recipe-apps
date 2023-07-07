import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SpotifyData = () => {
  const clientId = 'f4053716865d4ce4ad48f639537a6377';
  const clientSecret = '2beac13474594cffa89d1a3d235f0da4';

  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: 'post',
          url: 'https://accounts.spotify.com/api/token',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret)
          },
          data: 'grant_type=client_credentials'
        });

        const accessToken = response.data.access_token;
        setAccessToken(accessToken);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Spotify Data</h2>
      <p>Access Token: {accessToken}</p>
    </div>
  );
};

export default SpotifyData;
