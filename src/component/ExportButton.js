// ExportButton.js
import Papa from "papaparse";
import { saveAs } from "file-saver";

const ExportButton = ({ data }) => {
  const downloadCSV = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "processed_data.csv");
  };

  return <button onClick={downloadCSV}>Download CSV</button>;
};

export default ExportButton;