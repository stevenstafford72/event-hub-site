import { render, screen } from '@testing-library/react';
import EventCard from '../components/EventCard';

test('renders event title', () => {
  render(<EventCard event={{ id: '1', title: 'Sample Event', description: '', date: '' }} />);
  expect(screen.getByText(/Sample Event/i)).toBeInTheDocument();
});
