import React from 'react';
import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer} from 'recharts';

const data = [
  { day: 'Mon', typeA: 20, typeB: 35 },
  { day: 'Tue', typeA: 40, typeB: 30 },
  { day: 'Wed', typeA: 25, typeB: 15 },
  { day: 'Thu', typeA: 30, typeB: 25 },
  { day: 'Fri', typeA: 35, typeB: 40 },
  { day: 'Sat', typeA: 20, typeB: 15 },
  { day: 'Sun', typeA: 25, typeB: 20 },
];

const ActivityChart = () => {
  return (
    <div style={{ width: '100%', height: "105px" }}>
      
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={4}>
          <XAxis dataKey="day" />
          <YAxis hide />
          <Tooltip />
          <Bar dataKey="typeA" fill="grey" radius={[5, 5, 0, 0]} barSize={5} />
          <Bar dataKey="typeB" fill="#1a237e" radius={[5, 5, 0, 0]} barSize={5} />
           <Bar dataKey="typeA" fill="#00bcd4" radius={[5, 5, 0, 0]} barSize={5} />
          {/* <Bar dataKey="typeB" fill="grey" radius={[5, 5, 0, 0]} barSize={5} />  */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;