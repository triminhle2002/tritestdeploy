import React, { useEffect, useMemo, useState } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const data = [
  {
    startDate: moment("2023-10-22T10:00:00").toDate(),
    endDate: moment("2023-10-22T10:00:00").toDate(),
    customerName: "Dang Nhat Minh",
    assignTo: "Dang",
  },
  {
    startDate: moment("2023-10-22T10:00:00").toDate(),
    endDate: moment("2023-10-22T10:00:00").toDate(),
    customerName: "Dang Nhat Minh",
    assignTo: "Tri",
  },
  {
    startDate: moment("2023-10-22T10:00:00").toDate(),
    endDate: moment("2023-10-22T10:00:00").toDate(),
    customerName: "Dang Nhat Minh",
    assignTo: "Nhat",
  },
];

const components = {
  event: (props) => {
    const eventType = props?.event?.data?.type;
    return props.title;
  },
};

export default function CalendarPage() {
  const [localizer, setLocalizer] = useState(momentLocalizer(moment));
  const [events, setEvents] = useState([]);

  useState(() => {
    // fetch data get _event

    const _events = data.map((calendar) => {
      const start = moment(calendar.startDate).toDate();
      const end = moment(calendar.endDate).toDate();
      const title = calendar.customerName;
      const data = { type: "Reg" };

      return { start, end, title, data };
    });

    setEvents(_events);
  });

  return (
    <div style={{ height: "100%" }}>
      <Calendar
        localizer={localizer}
        events={events}
        components={components}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
}
