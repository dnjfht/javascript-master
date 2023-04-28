function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error("치킨을 가지고 올 수 없음!"));
  // return Promise.resolve(`🌱 => 🐓 `);
}

async function fetchEggFry() {
  try {
    const chicken = await getChicken();
    const egg = await fetchEgg(chicken);
    const fryegg = await fryEgg(egg);
    return fryegg;
  } catch (error) {
    return "🐔";
  }
}

fetchEggFry() //
  .then((fryEgg) => console.log(fryEgg));
