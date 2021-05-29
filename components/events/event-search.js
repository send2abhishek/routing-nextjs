import { useRef } from "react";
import Button from "components/ui/button";
import Classes from "components/events/events-search.module.css";

const EventSearch = (props) => {
  const yearRef = useRef();
  const monthRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const selectedYear = yearRef.current.value;
    const selectedMonth = monthRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  };

  return (
    <form className={Classes.form} onSubmit={formSubmitHandler}>
      <div className={Classes.controls}>
        <div className={Classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={Classes.control}>
          <label htmlFor="month">month</label>
          <select id="month" ref={monthRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
          </select>
        </div>
      </div>
      <Button>Search</Button>
    </form>
  );
};

export default EventSearch;
