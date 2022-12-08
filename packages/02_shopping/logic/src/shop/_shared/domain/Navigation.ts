export enum Screen {
  HOME = "HOME",
  CATALOG = "CATALOG",
  PRODUCT_DETAIL = "PRODUCT_DETAIL",
  CART = "CART",
  WALLET = "WALLET",

  TRAVELNAVIGATION = "TRAVELNAVIGATION",
  BARCELONA = "BARCELONA",
  BERLIN = "BERLIN",
}

export interface INavigation {
  onChangeScreen(
    callback: (screen: Screen) => void
  ): void;
  getScreen(): Screen;
  goTo(screen: Screen): void;
  goBack(): void;
}

export class Navigation implements INavigation {
  private history: Screen[] = [];
  private currentScreen: Screen = Screen.HOME;
  private onChangeCallback!: (screen: Screen) => void;

  public goTo(screen: Screen) {
    this.history.push(screen);
    this.currentScreen = screen;
    this.notifyChange();
  }

  public goBack() {
    const screenName = this.history.pop();
    if(screenName) {
      this.currentScreen = screenName;
    } else {
      this.currentScreen = Screen.HOME;
    }
    this.notifyChange();
  }

  public getScreen() {
    return this.currentScreen;
  }

  public onChangeScreen(callback: (screen: Screen) => void): void {
    this.onChangeCallback = callback;
  }

  public getHistory(): Screen[] {
    return this.history;
  }

  private notifyChange() {
    this.onChangeCallback(this.currentScreen);
  }
}

export const navigation = new Navigation();
