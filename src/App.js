import { useContext, useEffect } from "react";
import { CarContext } from "./CarContext";
import CarTable from "./components/CarTable/CarTable";
import { data } from "./data";

function App() {
  const { showCars } = useContext(CarContext);
  useEffect(() => {
    showCars();
  }, []);

  return (
    <div className="App">
      <CarTable />
    </div>
  );
}

export default App;
