import { useRef } from "react";

import classes from "./newsletter-registration.module.css";
import { handleEmailRegistrationRequest } from "utils/api-utils";

function NewsletterRegistration() {
  const email = useRef();

  async function registrationHandler(event) {
    event.preventDefault();
    const response = await handleEmailRegistrationRequest(email.current.value);
    console.log("API response is ", response);
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={email}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
