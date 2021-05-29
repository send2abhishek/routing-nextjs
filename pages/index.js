import { getAllEvents } from "dummyData";
import EventList from "components/events/event-list";

const Home = () => {
  return (
    <div>
      <EventList eventItems={getAllEvents()} />
    </div>
  );
};

export default Home;
