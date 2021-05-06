// A mock function to mimic making an async request for data

import data from "./orders.json";

export function AsyncOrders() {
  return new Promise((resolve) => setTimeout(() => resolve(data), 2000));
}