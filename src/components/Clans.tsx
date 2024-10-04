import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Clan } from '../interfaces/Clan';
import '../styles/Clan.css'

const API_URL = process.env.REACT_APP_API_URL;

const Clans: React.FC = () => {
  const [clans, setClans] = useState<Clan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClans = async () => {
      try {
        const response = await axios.get(`${API_URL}/clans`);
        setClans(response.data.clans);
        console.log(response.data.clans)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching clans:', error);
      }
    };

    fetchClans();
  }, []);

  if (loading) {
    return <p>Loading clans...</p>;
  }

  return (
    <div className="clans-container">
      {clans.map((clan) => (
        <div key={clan.id} className="clan-card">
          <h3>{clan.name}</h3>
          <p className="clan-members">Members: {clan.characters.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Clans;
