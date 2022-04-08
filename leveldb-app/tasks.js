const levelup = require("levelup");
const leveldown = require("leveldown");

const db = levelup(leveldown("./data"));

const task = process.argv[2];

if (!task) {
  listTasks();
} else {
  addTask();
}

function addTask() {
  const key = `Task: ${Math.random().toString(32).replace(".", "")}`;
  db.put(key, task, (err) => {
    if (err) throw err;
    listTasks();
  });
}

function listTasks() {
  db.createReadStream().on("data", (data) => {
    console.log(data.key.toString(), "=", data.value.toString());
  });
}

const operations = [
  { type: "put", key: "forename", value: "Beth" },
  { type: "put", key: "surname", value: "Griggs" },
];

db.batch(operations, function (err) {
  if (err) return console.error(err);
  console.log("Batch operations complete.");
});

db.batch()
  .put("forename", "Beth")
  .put("surname", "Griggs")
  .write(() => console.log("Batch operations complete."));
