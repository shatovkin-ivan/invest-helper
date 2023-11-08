import BondsApi from './BondsApi';

const apies = {
  bonds: BondsApi
};

export const BondsFactory = {
  get: (name) => apies[name]
};
