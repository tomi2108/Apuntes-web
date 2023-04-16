const host =
  process.env.NODE_ENV === "development" ? "http://localhost:3101" : "";

export { host };
