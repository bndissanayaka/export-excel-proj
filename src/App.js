import "./App.css";
import { Customers } from "./Components/Customers";
import { ExportCSV } from "./Components/ExportCSV";
import Header from "./Components/Header";

function App() {
  let fileName = "MyExcelFile";
  let customers = () => {
    let custs = [];
    for (let i = 0; i <= 25; i++) {
      custs.push({
        firstName: `first${i}`,
        lastName: `last${i}`,
        email: `abc${i}@gmail.com`,
        address: `000${i} street city, ST`,
        zipcode: `0000${i}`,
      });
    }
    return custs;
  };
  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col-md-8">
          <h2>Customers</h2>
        </div>
        <div className="col-md-4 center">
          <ExportCSV csvData={customers()} fileName={fileName} />
        </div>
      </div>
      <Customers customers={customers()} />
    </div>
  );
}

export default App;
