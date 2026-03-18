import Papa from "papaparse";

const FileUpload = ({ setData }) => {
  const handleFile = (e) => {
    const file = e.target.files[0];

    // ✅ FIX: check if file exists
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        setData(result.data);
      },
      error: (err) => {
        console.error("Parsing error:", err);
      },
    });

    // ✅ Reset input so same file can be uploaded again
    e.target.value = null;
  };

  return <input type="file" accept=".csv" onChange={handleFile} />;
};

export default FileUpload;