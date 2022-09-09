import { gGet } from "@goinapp/gshell-native";
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom'
import { Multi1Store } from "../stores/Multi1Store";

export const MultiScreen1 = observer(() => {
  const navigate = useNavigate()
   const store = gGet(Multi1Store)
  return (
    <div>
      <p>MultiScreen1</p>
      <p>{store.publicProperty}</p>
      <button onClick={()=>navigate('/multi-screen2')}>MultiScreen2</button>
    </div>
  );
})