// A mock function to mimic making an async request for data

import data from "./header.json";

export function AsyncHeader() {
  return new Promise((resolve) => setTimeout(() => resolve(data), 2000));
}
