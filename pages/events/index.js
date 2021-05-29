import { useRouter } from "next/router";
import { getAllEvents } from "dummyData";
import EventList from "components/events/event-list";
import EventSearch from "components/events/event-search";

const Events = () => {
  const { push } = useRouter();

  const findEventHandler = (year, month) => {
    const path = `/events/${year}/${month}`;
    push(path);
  };

  return (
    <div>
      <EventSearch onSearch={findEventHandler} />
      <EventList eventItems={getAllEvents()} />
    </div>
  );
};

export default Events;
