import { navigation, Screen } from "@goinapp/logic/src/shop/_shared/domain/Navigation";

export const TravelNavigation = () => {
  return (
    <div>
      <h1>Travel Navigation</h1>
      <button onClick={() => {
        navigation.goTo(Screen.BARCELONA)
      }}>Go to Barcelona</button>

      <button onClick={() => {
        navigation.goTo(Screen.BERLIN)
      }}>Go to Berlin</button>
    </div>
  );
}
