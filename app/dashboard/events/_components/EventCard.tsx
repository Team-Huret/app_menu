import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { Event } from "@/types/event";

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="border border-gray-300 rounded-lg bg-white p-5 flex gap-x-7 hover:border-primary transition">
      <div className="size-[150px] rounded-lg ">
        <Image src={event.image} alt="Event image" width={150} height={150} className="rounded-lg aspect-square object-cover" />
      </div>
      <div>
        <h3 className="text-lg mb-3">{event.name}</h3>
        <div className="text-sm">
          <span className="font-semibold">Date :</span>
          <span className="text-muted-foreground ml-2">
            {event.start_date} - {event.end_date}
          </span>
        </div>
        <div className="text-sm mb-5">
          <span className="font-semibold">Time :</span>
          <span className="text-muted-foreground ml-2">
            {event.start_time} - {event.end_time}
          </span>
        </div>
        <div className="w-full flex justify-center items-center gap-x-2">
          <Button variant="outline">Edit</Button>
          <Button>Delete</Button>
        </div>
      </div>
    </div>
  );
}
