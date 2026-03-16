'use client';

import dynamic from 'next/dynamic';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import { useMemo } from 'react';
import { Card } from '@/components/ui/card';
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/resource-timegrid/main.css';

const FullCalendar = dynamic(() => import('@fullcalendar/react'), { ssr: false });

const sampleResources = [
  { id: '1', title: 'Alice - Barista' },
  { id: '2', title: 'Bob - Server' },
  { id: '3', title: 'Chloe - Kitchen' }
];

const sampleEvents = [
  {
    id: 'shift-1',
    resourceId: '1',
    title: 'Morning Shift',
    start: new Date().setHours(8, 0, 0, 0),
    end: new Date().setHours(12, 0, 0, 0),
    backgroundColor: '#4178ff'
  },
  {
    id: 'shift-2',
    resourceId: '2',
    title: 'Lunch Service',
    start: new Date().setHours(12, 0, 0, 0),
    end: new Date().setHours(17, 0, 0, 0),
    backgroundColor: '#22c55e'
  }
];

export const ShiftCalendar = () => {
  const events = useMemo(() => sampleEvents, []);

  return (
    <Card className="p-4">
      <FullCalendar
        plugins={[interactionPlugin, timeGridPlugin, dayGridPlugin, resourceTimeGridPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: 'title',
          center: 'dayGridMonth,timeGridWeek,timeGridDay',
          right: 'prev,next today'
        }}
        nowIndicator
        editable
        droppable
        selectable
        events={events}
        resources={sampleResources}
        height="auto"
      />
    </Card>
  );
};
