
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormRenderer from './components/FormRenderer';

function App() {
  const [formPacketData, setFormPacketData] = useState(null);
  const [error, setError] = useState(null);

  const groupId = window.location.pathname.split('/').pop(); // e.g., /form/gpmed12345

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/form-packets/${groupId}`);
        setFormPacketData(res.data);
      } catch (err) {
        setError('Form Packet not found or failed to load.');
      }
    };
    fetchData();
  }, [groupId]);

  if (error) return <div>{error}</div>;
  if (!formPacketData) return <div>Loading...</div>;

  return (
    <div style={{ fontFamily: formPacketData.theme?.fontFamily }}>
      <FormRenderer packet={formPacketData.formPackets[0]} theme={formPacketData.theme} />
    </div>
  );
}

export default App;
