const host =
  process.env.NODE_ENV === "development" ? "http://localhost:2225" : "";

export { host };
