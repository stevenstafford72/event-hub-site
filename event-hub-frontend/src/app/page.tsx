// src/app/page.tsx
import { getAllEvents } from '@/lib/fetcher';
import EventCard from './components/EventCard';


export default async function Home() {
  const events = await getAllEvents();

  return (
    <div className="flex-row bg-white grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-16 p-4">
      {events.map((event: any) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}