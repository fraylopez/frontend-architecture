import { gGet } from "@goinapp/gshell-native";
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom'
import { Multi1Store } from "../stores/Multi1Store";

export const MultiScreen1 = observer(() => {
  const navigate = useNavigate()
  const store = gGet(Multi1Store)

  const localStore = {share:""}

  const onClick = () => {
    store.setSharedData(localStore.share)
    navigate('/multi-screen2')
  }

  return (
    <div>
      <p>MultiScreen1</p>
      <p>{store.publicProperty}</p>
      <input onChange={(el)=>localStore.share = el.target.value} style={{width:"50%"}} placeholder="data to share betweeen screens"></input>
      <button onClick={onClick}>MultiScreen2</button>
    </div>
  );
})