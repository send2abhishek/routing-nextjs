import EventItem from "components/events/event-item";
import Classes from "components/events/event-list.module.css";

const EventList = ({ eventItems }) => {
  return (
    <ul className={Classes.list}>
      {eventItems.map((event, id) => (
        <EventItem key={id} eventDetails={event} />
      ))}
    </ul>
  );
};

export default EventList;
