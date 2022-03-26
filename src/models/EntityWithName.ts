import { Identifier } from "./Identifier";

export interface EntityWithName<T> extends Identifier<T> {
  name: string;
}