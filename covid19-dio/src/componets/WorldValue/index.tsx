import React, {useState, useEffect} from "react";
import {World} from "../../types/World";
import {api} from "../../api/api";

export const WorldsValues = () => {
  const [world, setWorld] = useState<World>();
  const [loading, setLoading] = useState(false);

  const loadApi = async () => {
    setLoading(true);
    const worldJson = await api.getAllCovid();
    setLoading(false);
    setWorld(worldJson);
  };
  useEffect(() => {
    loadApi();
  }, []);

  return (
    <>
      <div className="Cases">
        <h3>Casos</h3>
        <h1>{world?.cases.toLocaleString("en-US")}</h1>
      </div>
      <div className="Deaths">
        <h3>Mortes</h3>
        <h1>{world?.deaths.toLocaleString("en-US")}</h1>
      </div>
      <div className="Recovered">
        <h3>Recuperados</h3>
        <h1>{world?.recovered.toLocaleString("en-US")}</h1>
      </div>
    </>
  );
};
