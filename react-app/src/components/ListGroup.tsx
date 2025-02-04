import { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "London", "Paris", "Mumbai", "Tokyo"];
  let selectedindex = 0;

  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

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
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
