import { useRouter } from "next/router";
import { getAllEvents } from "utils/api-utils";
import EventList from "components/events/event-list";
import EventSearch from "components/events/event-search";

const Events = ({ events }) => {
  const { push } = useRouter();

  const findEventHandler = (year, month) => {
    const path = `/events/${year}/${month}`;
    push(path);
  };

  return (
    <div>
      <EventSearch onSearch={findEventHandler} />
      <EventList eventItems={events} />
    </div>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default Events;
