function ListGroup() {
  let items = ["New York", "London", "Paris", "Mumbai", "Tokyo"];
  items = [];

  return (
    <>
      <h1>Hello World!</h1>
      {items.length === 0 && <p>Hi there!</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
