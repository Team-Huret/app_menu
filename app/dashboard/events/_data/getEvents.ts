"use client";
import { useEffect } from "react";
import { useState } from "react";
import { useEventStore } from "@/app/dashboard/events/_store/useEventStore";
import { Event } from "@/types/event";
import eventMock from "@/mock/event.json";

export const useGetEvents = () => {
  const { setEvents, events } = useEventStore();
  useEffect(() => {
    setEvents(eventMock.event as Event[]);
  }, []);

  return { events };
};
