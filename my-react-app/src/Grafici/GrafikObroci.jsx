import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { useInView } from 'react-intersection-observer';

const data = [
  { name: 'Doručak', Obroci: 4 },
  { name: 'Ručak', Obroci: 10 },
  { name: 'Večera', Obroci: 4 },
  { name: 'Užina', Obroci: 6 },
];

export default function GrafikObroci() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4, // Možeš prilagoditi
  });

  return (
    <div ref={ref} style={{ width: '100%', height: 300 }}>
      {inView && (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
            barSize={20}
          >
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="Obroci" fill="#8884d8" background={{ fill: '#eee' }} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
