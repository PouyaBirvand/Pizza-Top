import { useSelector } from 'react-redux';
import { selectStats } from '../aboutSlice';

export const useAbout = () => {
  const stats = useSelector(selectStats);

  const formatStats = () => [
    {
      id: 'customers',
      value: `${Math.floor(stats.customers / 1000)}K+`,
      label: 'Happy Customers',
    },
    {
      id: 'pizzas',
      value: `${Math.floor(stats.pizzasDelivered / 1000)}K+`,
      label: 'Pizzas Delivered',
    },
    {
      id: 'rating',
      value: stats.averageRating.toString(),
      label: 'Average Rating',
    },
    {
      id: 'years',
      value: stats.yearsOfExcellence.toString(),
      label: 'Years of Excellence',
    },
  ];

  return {
    stats: formatStats(),
  };
};
