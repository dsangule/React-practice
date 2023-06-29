export default function App() {

  // const [inputList, setInputList] = useState("");
  // const [items, setItems] = usestate([]);

  // const itemEvent = (event) => {
  //   setInputList(event.target.value);
  // };

  // const listOfItems = () => {
  //   setItems((oldItems) => {
  //     return [...oldItems, inputList];
  //   });
  // };

  return(
    <React.Fragment>
    <div className="body">
      <div className="header">
        <h1>4 Tasks</h1>
        <h2>4 remain</h2>
      </div>

      <div>
        <ol>
          {items.map( (itemVal) => {
            return (<li>{itemVal}</li>);
          })}
        </ol>
      </div>
{/* 
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add Todo" onChange={itemEvent}/>
        <button onClick={listOfItems}>Add</button>
      </form> */}
    </div>
    </React.Fragment>
  );
}