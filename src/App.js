import {data} from "./data"

function App() {
  return (
    <div className="App">
      {data.map((item)=>{
        return (
          <img src={item.picture} alt="nova" />
          )
      })}
    </div>
  );
}

export default App;
