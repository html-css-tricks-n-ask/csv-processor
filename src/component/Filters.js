// Filters.js
const Filters = ({ data, setFilteredData }) => {
  const handleFilter = () => {
    const filtered = data.filter((item) => Number(item.age) > 25);
    setFilteredData(filtered);
  };

  return <button onClick={handleFilter}>Filter Age {'>'} 25</button>;
};

export default Filters;