import { gGet } from "@goinapp/gshell-native";
import { observer } from "mobx-react-lite";
import { Section1Store } from "../stores/Section1Store";

export const Section1 = observer(() => {
  const store = gGet(Section1Store);

  return (
    <div>
      <h1>{store.publicProperty}</h1>
      <p>{JSON.stringify(store.fetchedData,null, 4)}</p>

      <button onClick={()=>store.fetch()}>FETCH</button>
    </div>
  );
})