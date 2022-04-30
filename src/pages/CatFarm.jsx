import { useState } from "react";
import CatGrid from "../components/CatGrid";

const CatFarm = () => {
  const [farm, setFarm] = useState("farm");

  const handleChange = (e) => {
    setFarm(e.target.value);
  };

  return (
    <div className="catfarm">
      <h1>Cat Farm</h1>
      <select value={farm} onChange={handleChange}>
        <option value="farm">Happy Farm</option>
        <option value="sad-farm">Sad Farm</option>
      </select>
      <CatGrid storeKey={farm} />
    </div>
  );
};

export default CatFarm;
