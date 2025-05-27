import React from 'react';
import { FaLungs, FaTooth, FaBone } from 'react-icons/fa';

const healthData = [
  {
    icon: <FaLungs style={{ color: 'red', fontSize: '24px' }} />,
    label: 'Lungs',
    date: 'Sun 24 Oct 2021',
    progress: 80,
    color: 'red'
  },
  {
    icon: <FaTooth style={{ color: '#bba16a', fontSize: '24px' }} />,
    label: 'Teeth',
    date: 'Sun 24 Oct 2021',
    progress: 60,
    color: 'teal'
  },
  {
    icon: <FaBone style={{ color: 'grey', fontSize: '24px' }} />,
    label: 'Bone',
    date: 'Sun 24 Oct 2021',
    progress: 75,
    color: 'orangered'
  }
];

const StatusCard = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '300px', fontFamily: 'Arial' }}>
      {healthData.map((item, index) => (
        <div key={index} style={{ marginBottom: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {item.icon}
            <span style={{ fontSize: '18px', fontWeight: '600', color: '#333' }}>{item.label}</span>
          </div>
          <div style={{ fontSize: '12px', color: 'gray', marginTop: '4px' }}>{item.date}</div>
          <div style={{ marginTop: '8px', height: '8px', background: '#eee', borderRadius: '5px' }}>
            <div style={{width:'${item.progress}%',height: '100%',backgroundColor: 'item.color',borderRadius: '5px'}} /> 
          </div> 
        </div>
      ))}
    </div>
  );
};

export default StatusCard;