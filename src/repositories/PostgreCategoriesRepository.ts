import { Category } from '../model/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

class PostgreCategoriesRepository implements ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(name, description);
  }

  getAll(): Category[] {
    return null;
  }

  findByName(name: string): Category {
    console.log(name);
    return null;
  }
}

export { PostgreCategoriesRepository };
