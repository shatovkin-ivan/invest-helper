import MainApiModule from './MainApiModule';

const resourse = '/bonds';

export default {
  getAllBonds() {
    return MainApiModule.get(`${resourse}`);
  }
};
