const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

const sortedRobots = robots.map(function (r) {
  let newR = Object.assign({}, r)
  if (knownDecepticons.includes(r.name)) {
    newR.alliance = "decepticon";
  } else {
    newR.alliance = "autobot";
  }
  return newR;
});

const coloredZebraStripes = zebraStripes.map(function (s, i) {
  let newS = Object.assign({}, s);
  if (i%2) {
    newS.color = 'white';
  } else {
    newS.color = 'black';
  }
  return newS;
})
