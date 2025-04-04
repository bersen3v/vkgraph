export type Action<T> =
  | {
      type: "Loading";
    }
  | {
      type: "Loaded";
      data: T;
    };
