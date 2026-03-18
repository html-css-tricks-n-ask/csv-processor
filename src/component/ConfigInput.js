// ConfigInput.js
import { useState } from "react";

const ConfigInput = ({ applyConfig }) => {
  const [config, setConfig] = useState(`{
  "filter": { "column": "age", "operator": ">", "value": 25 },
  "sort": { "column": "name", "order": "asc" }
}`);

  const handleApply = () => {
    try {
      const parsed = JSON.parse(config);
      applyConfig(parsed);
    } catch (err) {
      alert("Invalid JSON");
    }
  };

  return (
    <div>
      <h3>Config JSON</h3>
      <textarea
        rows="8"
        cols="50"
        value={config}
        onChange={(e) => setConfig(e.target.value)}
      />
      <br />
      <button onClick={handleApply}>Apply Config</button>
    </div>
  );
};

export default ConfigInput;