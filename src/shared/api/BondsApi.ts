import MainApiModule from './MainApiModule';

const resourse = '/bonds';

export default {
  getAllBonds(skip = 0, limit = 100) {
    return MainApiModule.get(`${resourse}/all?limit=${limit}&skip=${skip}`);
  },
  getCorporateBonds(skip = 0, limit = 100) {
    return MainApiModule.get(`${resourse}/corporate?limit=${limit}&skip=${skip}`);
  },
  getExchangeBonds(skip = 0, limit = 100) {
    return MainApiModule.get(`${resourse}/exchange?limit=${limit}&skip=${skip}`);
  },
  getSubfederalBonds(skip = 0, limit = 100) {
    return MainApiModule.get(`${resourse}/subfederal?limit=${limit}&skip=${skip}`);
  },
  getOfzBonds(skip = 0, limit = 100) {
    return MainApiModule.get(`${resourse}/ofz?limit=${limit}&skip=${skip}`);
  },
  getMunicipal(skip = 0, limit = 100) {
    return MainApiModule.get(`${resourse}/municipal?limit=${limit}&skip=${skip}`);
  }
};
