import { EntityWithName } from "@models/EntityWithName";

export interface IProduct extends EntityWithName<string> {
  quantity: number;
}