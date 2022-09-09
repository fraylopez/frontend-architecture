import { gGet } from "@goinapp/gshell-native";
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom'
import { Multi2Store } from "../stores/Multi2Store";

export const MultiScreen2 = observer(() => {
  const navigate = useNavigate()
  const store = gGet(Multi2Store)
  return (
    <div>
      <p>MultiScreen2</p>
      <p>{store.publicProperty}</p>
      <p>{store.sharedData}</p>
      <button onClick={()=>navigate('/multi-screen1')}>BACK</button>
    </div>
  );
})