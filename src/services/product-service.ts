import { IProduct } from "@models/products";
import BaseService from "./base-service";
import { initializeFirestore } from 'firebase/firestore';

class ProductService extends BaseService {

  getProducts = () => {

  }
}

export default new ProductService();
