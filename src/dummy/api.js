const { smallCartData } = require("../data");

const delay = (time) =>
  new Promise((res, rej) => {
    setTimeout(() => res(), time);
  });

export default async function api() {
  await delay(1000);
  return smallCartData;
}
