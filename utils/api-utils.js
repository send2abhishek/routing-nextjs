export async function getAllEvents() {
  const response = await fetch(
    "https://next-routing-default-rtdb.firebaseio.com/events.json"
  );

  const data = await response.json();

  let events = [];

  for (let key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvent() {
  const allEvents = await getAllEvents();

  const featuredEvents = allEvents.filter((e) => e.isFeatured);

  return featuredEvents;
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
