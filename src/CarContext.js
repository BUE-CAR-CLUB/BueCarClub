import { createContext, useState } from "react";
import axios from "axios";

// Dataların aktarımını sağlamak için context yapısı oluşturuldu.
export const CarContext = createContext();
// Context yapısıyla birlikte alt componentlere aktarmak için children objesi verildi.

// UseState kullanarak cars adında başlangıçta boş bir array tanımlandı.
// setCars adlı fonksiyon ile de aşağıdaki fonksiyonlarda yapılacak işlemlere göre bu arrayi güncelledik.
export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);

  // axios kütüphanes ile iletişim kurduk ve araba verilerini asenkron bir şekilde çektik.
  const showCars = async () => {
    const response = await axios.get("http://localhost:3001/cars");
    setCars(response.data); // Burada responseta bulunan datanın içerisindeki verileri çekip yeni cars arrayine verdik. 
  };

  // araba verilerinde silme işlemini axios ile gerçekleştirdik.
  const deleteCars = async (id) => {
    await axios.delete(`http://localhost:3001/cars/${id}`);
    const updateCars = cars.filter((car) => {
      return car.id !== id;
    });
    setCars(updateCars);
  };

  // araba verilerinde edit işlemlerini axios kütüphanesini kullanarak gerçekleştirdik.
  const editCars = async (
    id,
    model,
    year,
    url,
    editedPrice,
    editedDescription
  ) => {
    const response = await axios.put(`http://localhost:3001/cars/${id}`, {
      model,
      year,
      url,
      price: editedPrice,
      description: editedDescription,
    });
    const editedCars = cars.map((car) => {
      if (car.id === id) {
        return { ...car, ...response.data };
      }
      return car;
    });
    setCars(editedCars);
  };

    // axios http kütüphanesinde bulunan post metodu ile yeni oluşturulacak arabanın verilerini bir önceki arrayi spread operatörü ile koruyarak üstüne ekledik..
  const createCars = async (
    newModel,
    newYear,
    newPrice,
    newDescription,
    newUrl
  ) => {
    const response = await axios.post(` http://localhost:3001/cars`, {
      model: newModel,
      year: newYear,
      price: newPrice,
      description: newDescription,
      url: newUrl,
    });
    const updatedCars = [...cars, response.data];
    setCars(updatedCars);
  };

  // CarContext'in diğer bileşenler tarafından erişlebilir olması için Provider'a sardık. Bu tüm CarContext componentinde bulunan metotlar iletilmek üzere prop olarak verildi. 
  // Bu sayede diğer alt bileşenlerden value olarak verdiğimiz fonksiyonlara erişim sağladı.
  return (
    <CarContext.Provider
      value={{ cars, setCars, showCars, deleteCars, editCars, createCars }}
    >
      {children} {/* Burada CarContext componentinin taglari içerisinde yer alan  tüm alt bileşenler artık proplara erişim sağlıyor.(value) */}
    </CarContext.Provider>
  );
};
