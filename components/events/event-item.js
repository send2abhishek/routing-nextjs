import Button from "components/ui/button";
import DateIcon from "components/icons/date-icon";
import AddressIcon from "components/icons/address-icon";
import ArrowRight from "components/icons/arrow-right-icon";
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
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={Classes.address}>
            <AddressIcon />
            <address>{formateAddress}</address>
          </div>
          <div className={Classes.actions}>
            <Button link={`/events/${id}`}>
              <span>Explore Event</span>
              <span className={Classes.icon}>
                <ArrowRight />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
