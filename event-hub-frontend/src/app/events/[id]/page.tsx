import { getAllEvents } from '@/lib/fetcher';
import Image from 'next/image';
import { CalendarIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline'; // Example icons

export default async function EventDetail({ params }: { params: { id: string } }) {
  const events = await getAllEvents();
  const event = events.find((e: any) => e.id === params.id);

  if (!event) return <div>Event not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-400 to-gray-6000 py-16 px-8 md:px-24 lg:px-32 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative">
          <Image
            src={event.image}
            alt={event.title}
            layout="fill"
            objectFit="cover"
            className="rounded-l-xl md:rounded-l-xl"
          />
        </div>

        {/* Details Section */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{event.title}</h1>
            <p className="text-gray-700 text-lg mb-6">{event.description}</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center text-gray-600">
              <CalendarIcon className="h-5 w-5 mr-2" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <ClockIcon className="h-5 w-5 mr-2" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <TagIcon className="h-5 w-5 mr-2" />
              <span className="text-indigo-500 font-medium">{event.category}</span>
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}