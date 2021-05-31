import { getFilteredEvents } from "utils/api-utils";
import EventList from "components/events/event-list";

const FilteredEvent = ({ event, error }) => {
  if (error) {
    return <p>Not found..</p>;
  }

  return (
    <div>
      <EventList eventItems={event} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const year = params.slug[0];
  const month = params.slug[1];

  if (
    isNaN(+year) ||
    isNaN(+month) ||
    +year > 2030 ||
    +month < 1 ||
    +month > 12
  ) {
    return {
      props: {
        error: "Not Found",
      },
    };
  }

  const events = await getFilteredEvents({
    year: +year,
    month: +month,
  });

  if (!events) {
    return {
      props: {
        error: "Invalid Filter",
      },
    };
  }

  return {
    props: {
      event: events,
    },
  };
}

export default FilteredEvent;
