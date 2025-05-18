//
// Listing 3.3: An event list component in React
//

import React, { useState } from "react";

export default function EventList() {
  const [events, setEvents] = useState(["Initial event"]);

  return (
    <ul id="event-list">
      {events.map((str) => (
        <li>{str}</li>
      ))}
      <li>
        <input
          onKeyDown={(evt) => {
            setEvents(
              events.concat(`Event "keydown" fired with key =
  "${evt.key}"`),
            );
          }}
        />
      </li>
    </ul>
  );
}
