import { Fragment, useState } from "react";
// import { MouseEvent } from "react";

function ListGroup2() {
  // return <h1>List group changes</h1>;
  //   const items = ["mumbai", "Goa", "Karnataka", "Keralam", "Tamil Nadu"];
  let items = ["mumbai", "Goa", "Karnataka", "Keralam", "Tamil Nadu"];
  //   items = [];
  const [selectedindex, setselectedindex] = useState(-1);
  // eventhandler
  //   const handleclick = (event: MouseEvent) => console.log(event);

  //managingevents
  //   let selectedindex = 0;
  //   items.map((item) => <a> {item} </a>);

  //   if (items.length === 0)
  //     return (
  //       <Fragment>
  //         <h1>Listing items</h1>
  //         <p>NO item found</p>;
  //       </Fragment>
  //     );

  return (
    <Fragment>
      <h1>Listing items</h1>
      {items.length === 0 && <p>NO item found</p>}

      {/* <div className="list-group">
       */}
      <div className="list-group">
        {
          /* <a
          href="#"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          The current link item
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          A second link item
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          A third link item
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          A fourth link item
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action disabled"
          aria-disabled="true"
        >
          A disabled link item
        </a> */
          items.map((item, index) => (
            <a
              className={
                selectedindex == index
                  ? "list-group-item active"
                  : "list-group-item"
              } //"list-group-item active"
              key={item}
              onClick={() => {
                setselectedindex(index);
              }}
            >
              {" "}
              <div className="col-2">{item} </div>
            </a>
          ))
        }
      </div>
    </Fragment>
  );
}

export default ListGroup2;
