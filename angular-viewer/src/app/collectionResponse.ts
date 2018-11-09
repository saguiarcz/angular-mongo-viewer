export interface CollectionResponse {
  collections: string[];
}

export interface OneCollectionResponse {
  response: Object[],
  count: number
}


export interface OneCollectionResponse1 {
  _id: string;
  _class: string;
  assetId: string;
  prodId: number;
  prodCount: number;
  targetCount: number;
  lastProdTime: number;
}
