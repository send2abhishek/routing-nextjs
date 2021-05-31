import { getFeaturedEvent } from "utils/api-utils";
import EventList from "components/events/event-list";

const Home = ({ events }) => {
  return (
    <div>
      <EventList eventItems={events} />
    </div>
  );
};

export async function getStaticProps(contex) {
  const events = await getFeaturedEvent();

  return {
    props: {
      events: events,
    },
    revalidate: 1800,
  };
}

export default Home;
