import { useState } from "react";
// import FileUpload from "./components/FileUpload";
// import DataTable from "./components/DataTable";
// import Filters from "./components/Filters";
// import ExportButton from "./components/ExportButton";


import FileUpload from "./component/FileUpload";
import DataTable from "./component/DataTable";
import Filters from "./component/Filters";
import ExportButton from "./component/ExportButton";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  return (
    <div>
      <h2>CSV Processor</h2>

      <FileUpload setData={setData} />
      <Filters data={data} setFilteredData={setFilteredData} />

      <DataTable data={filteredData.length ? filteredData : data} />

      <ExportButton data={filteredData.length ? filteredData : data} />
    </div>
  );
}

export default App;