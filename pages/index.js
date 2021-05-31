import Head from "next/head";
import { getFeaturedEvent } from "utils/api-utils";
import EventList from "components/events/event-list";

const Home = ({ events }) => {
  return (
    <div>
      <Head>
        <title>Featured Events</title>
        <meta name="description" content="All Events" />
      </Head>
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
