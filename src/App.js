import { useContext, useEffect } from "react";
import { CarContext } from "./CarContext";
import CarTable from "./components/CarTable/CarTable";
import { data } from "./data";

function App() {
  // Context ile showCars prop olarak kullanıldı ve useEffect ile sayfa render edildiğinde bir kere çağırılıyor.
  const { showCars } = useContext(CarContext);
  useEffect(() => {
    showCars();
  }, []);
 // Tüm componentleri sardığımız cartable componenti burada app.js'e sarıldı.
  return (
    <div className="App">
      <CarTable /> 
    </div>
  );
}

export default App;
