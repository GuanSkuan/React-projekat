import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { useInView } from 'react-intersection-observer';

const data = [
  { name: '2019.', prosek: 7000 },
  { name: '2020.', prosek: 23000 },
  { name: '2021.', prosek: 57000 },
  { name: '2022.', prosek: 46000 },
  { name: '2023.', prosek: 60000 },
  { name: '2024.', prosek: 81000 },
  { name: '2025.', prosek: 94000 },
];

function GrafikRast() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} style={{ width: '100%', height: 300 }}>
      {inView && (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="prosek"
              stroke="#8884d8"
              fill="#8884d8"
              isAnimationActive={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default GrafikRast;
