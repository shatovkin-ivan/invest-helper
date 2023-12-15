import BondsApi from './BondsApi';

const apies = {
  bonds: BondsApi
};

export const BondsFactory = {
  get: (name: string) => apies[name]
};
