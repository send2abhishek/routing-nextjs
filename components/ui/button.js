import Link from "next/link";

import Classes from "components/ui/button.module.css";

const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={Classes.btn}>{props.children}</a>
      </Link>
    );
  } else {
    return (
      <button className={Classes.btn} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
};

export default Button;
