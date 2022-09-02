import { gGet } from "@goinapp/gshell-native";
import { observer } from "mobx-react-lite";
import { Section1Store } from "../stores/Section1Store";

export const Section1 = observer(() => {
  const secion1Store = gGet(Section1Store);

  return (
    <div>
      <h1>{secion1Store.data}</h1>
      <p>{JSON.stringify(secion1Store.someEntity,null, 4)}</p>
    </div>
  );
})