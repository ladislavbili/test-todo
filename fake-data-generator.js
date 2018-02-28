var faker = require("faker");

var db = { todos: [], users: [], statuses: [], tags: [] };

for (var i = 1; i <= 20; i++) {
  db.users.push({
    id: i,
    value: i,
    label: faker.name.firstName() + " " + faker.name.lastName()
  });
}

for (var i = 1; i <= 20; i++) {
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

for (var i = 1; i <= 20; i++) {
  db.todos.push({
    id: i,
    title: faker.lorem.sentence(),
    status: db.statuses[Math.floor(Math.random() * db.statuses.length)],
    requester: db.users[Math.floor(Math.random() * db.users.length)],
    assign: db.users[Math.floor(Math.random() * db.users.length)],
    author: db.users[Math.floor(Math.random() * db.users.length)]
  });
}

console.log(JSON.stringify(db));
