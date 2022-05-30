import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRespository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  const categories = categoriesRepository.getAll();
  return response.json(categories);
});

export { categoriesRoutes };
