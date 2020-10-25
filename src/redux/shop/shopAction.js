import ShopActiontypes from "./shopType";

export const updateCollections = (collectionMap) => ({
  type: ShopActiontypes.UPDATE_COLLECTIONS,
  payload: collectionMap,
});
