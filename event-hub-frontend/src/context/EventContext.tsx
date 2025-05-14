// src/context/EventContext.tsx
'use client';
import { createContext, useContext, useState } from 'react';

const EventContext = createContext<any>(null);

export function EventProvider({ children }: { children: React.ReactNode }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  return (
    <EventContext.Provider value={{ selectedEvent, setSelectedEvent }}>
      {children}
    </EventContext.Provider>
  );
}

export const useEventContext = () => useContext(EventContext);
