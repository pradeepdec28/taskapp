export interface WatchList {
  response: Response;
  success: boolean;
  statusCode: number;
  message: string;
}
export interface Response {
  lots: Lot[];
  totalPages: number;
  totalCount: number;
  sorts: Sort[];
}

export interface Location {
  name: string;
  image: string;
  url: string;
  latitude: string;
  longitude: string;
  country: string;
}

export interface Lot {
  name: string;
  title: string;
  description: string;
  id: string;
  idKey: string;
  topBid: number;
  nextBid: number;
  endDate: Date;
  startDate: Date;
  image: string;
  secondsRemaining: number;
  secondsUntilOpen: number;
  isUpdated: boolean;
  salesStatus: string;
  status: string;
  bidderNumber: number;
  location: Location;
  trackingNumber: string;
  openDate: Date;
  openDateCDT: string;
  auctionStatus: string;
  extended: boolean;
  auctionId: string;
  auctioneer: string;
  bidBoxDescription: string;
  totalAmountLabel: number;
  totalLiveStockAmount: number;
  currentTotal: string;
  nextTotal: string;
  currentBid: string;
  bidNext: string;
  acreSize: number;
  isBidPerAcre: boolean;
  bids: number;
  extensionMessage: string;
  quantity: number;
  quantityUnits: string;
  isBiddingPerUnit: boolean;
  categoryName: string;
  averageWeight: number;
  isBidder: boolean;
  isWinningBidder: boolean;
  isHighestBidder: boolean;
  isLosingBidder: boolean;
  sellingMode: string;
  makeAnOfferText: string;
  isSalePending: boolean;
  isSalePriceVisible: boolean;
  salePrice: number;
  offerStatus: string;
  offerAmount: number;
  buyItNowPrice: number;
  minimumOffer: number;
  highOffer: number;
  auctionTitle: string;
  allowCents: boolean;
}

export interface Sort {
  name: string;
  order: string;
  sort: string;
}
