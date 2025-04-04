export type CreatedRequest = {
  isLoading: boolean;
  isLoaded: false;
};

export type LoadingRequest<T> = {
  isLoading: true;
  isLoaded: boolean;
  data: T;
};

export type LoadedRequest<T> = {
  isLoaded: true;
  isLoading: false;
  data: T;
};

export type Request<T> = CreatedRequest | LoadedRequest<T> | LoadingRequest<T>;

export const InitialState = {
  isLoaded: false,
  isLoading: false,
};
