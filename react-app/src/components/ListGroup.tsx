import { useState } from "react";

function ListGroup() {
  let items = ["New York", "London", "Paris", "Mumbai", "Tokyo"];
  let selectedindex = -1;
  //Hook- This is to tell react that this has data that changes over time.
  const arr = useState(-1);
  //Event handler

  return (
    <>
      <h1>Hello World!</h1>
      {items.length === 0 && <p>Hi there!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedindex === index
                ? "list-group-item active"
                : "list-grou-item"
            }
            key={item}
            onClick={() => {
              selectedindex = index;
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
