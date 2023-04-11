const host =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3012"
    : process.env.PRODUCTION_HOST;

export { host };
