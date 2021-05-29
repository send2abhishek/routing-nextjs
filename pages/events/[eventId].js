import { useRouter } from "next/router";
import { getEventById } from "dummyData";
import EventSummary from "components/event-detail/event-summary";
import EventLogistics from "components/event-detail/event-logistics";
import EventContent from "components/event-detail/event-summary";

const selectedEvent = () => {
  const { query } = useRouter();
  const eventId = query.eventId;

  const event = getEventById(eventId);

  if (!event) {
    return <p>No Event Found!</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics event={event} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default selectedEvent;
