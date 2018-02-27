var faker = require("faker");

var db = { requesters: [], statuses: [], assigned: [], tags: [] };

for (var i = 1; i <= 1; i++) {
  db.requesters.push({
    id: i,
    value: i,
    label: faker.name.firstName() + " " + faker.name.lastName()
  });
}

db.assigned = db.requesters;

for (var i = 1; i <= 1; i++) {
  db.tags.push({
    id: i,
    value: faker.lorem.word(),
    color: faker.commerce.color()
  });
}

db.statuses.push(
  {
    id: 1,
    title: "NEW"
  },
  {
    id: 2,
    title: "OPEN"
  },
  {
    id: 3,
    title: "PENDING"
  },
  {
    id: 4,
    title: "CLOSED"
  }
);

console.log(JSON.stringify(db));
