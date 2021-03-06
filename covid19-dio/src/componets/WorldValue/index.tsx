import {World} from "../../types/World";
import * as C from "./styles";
type Props = {
  world: World | any;
};

export const WorldsValues = ({world}: Props) => {
  return (
    <C.Section>
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
    </C.Section>
  );
};
