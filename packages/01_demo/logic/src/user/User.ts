import { observable } from "mobx";

export class User {
  @observable
  readonly name: string;
  @observable
  readonly age: string;

  constructor(readonly id: string, name: string, age: number) {
    this.name = name;
    this.age = age.toString();
  }
}