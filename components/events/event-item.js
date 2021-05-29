import Link from "next/link";

import Classes from "components/events/event-item.module.css";

const EventItem = (props) => {
  const { title, image, date, location, id } = props.eventDetails;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formateAddress = location.replace(", ", "\n");

  return (
    <li className={Classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={Classes.content}>
        <div className={Classes.content}>
          <div className={Classes.summary}>
            <h2>{title}</h2>
          </div>
          <div className={Classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={Classes.address}>
            <address>{formateAddress}</address>
          </div>
          <div className={Classes.actions}>
            <Link href={`/events/${id}`}>Explore Event</Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
