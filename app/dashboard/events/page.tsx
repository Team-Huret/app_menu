"use client";
import EmptyEvents from "./_components/EmptyEvents";
import EventCard from "./_components/EventCard";
import { useGetEvents } from "@/app/dashboard/events/_data/getEvents";

export default function Page() {
  const { events } = useGetEvents();
  return (
    <div className="w-full flex flex-wrap gap-5 p-5">
      {events.length === 0 ? <EmptyEvents /> : events.map((event) => <EventCard key={event.id} event={event} />)}
    </div>
  );
}
