import { IProduct } from "@models/products";
import BaseService from "./base-service";

class ProductService extends BaseService {

  getProducts = () => super.get<IProduct[]>('');
}

export default new ProductService();
