import { getEventById, getFeaturedEvent } from "utils/api-utils";
import EventSummary from "components/event-detail/event-summary";
import EventLogistics from "components/event-detail/event-logistics";
import EventContent from "components/event-detail/event-summary";

const selectedEvent = ({ event }) => {
  if (!event) {
    return <p>Loading...</p>;
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

export async function getStaticProps(context) {
  const event = await getEventById(context.params.eventId);

  return {
    props: {
      event: event,
      notFound: true,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths(context) {
  const events = await getFeaturedEvent();
  return {
    paths: events.map((e) => ({
      params: {
        eventId: e.id,
      },
    })),
    fallback: true,
  };
}

export default selectedEvent;
