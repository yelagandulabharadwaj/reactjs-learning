import Message from "./message";
import ListGroup2 from "./components/ListGroup2";
import ListGroup from "./components/ListGroup";
import PassingProps from "./components/PassingProps";
import ChildrenComponent from "./components/ChildrenComponent";
import ButtonClick from "./components/button_comp";
import Toggle from "./components/ToggleButton";
function App() {
  // <Message /> means Message() in java code
  let items = ["mumbai", "Goa", "Karnataka", "Keralam", "Tamil Nadu"];
  let checkpoint = false;
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {/* <Message />
      <ListGroup />
      <ListGroup2 />
      <PassingProps
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}

      {/* <ChildrenComponent>
        Hello<span> World </span>
      </ChildrenComponent> */
      /* </div> */}

      {/* <ButtonClick click_check={checkpoint} />
       */}
      <Toggle />
    </div>
  );
}

export default App;
