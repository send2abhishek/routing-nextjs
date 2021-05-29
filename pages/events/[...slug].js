import { useRouter } from "next/router";
import { getFilteredEvents } from "dummyData";
import EventList from "components/events/event-list";

const FilteredEvent = () => {
  const { query } = useRouter();

  if (!query.slug) {
    return <p>Loading..</p>;
  }

  const year = query.slug[0];
  const month = query.slug[1];

  if (
    isNaN(+year) ||
    isNaN(+month) ||
    +year > 2030 ||
    +month < 1 ||
    +month > 12
  ) {
    return <p>Invalid Filter conditions</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: +year,
    month: +month,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No event found for choosen filter</p>;
  }

  return (
    <div>
      <EventList eventItems={filteredEvents} />
    </div>
  );
};

export default FilteredEvent;
