use bucket_list;
db.dropDatabase();

db.goals.insertMany([
  {
    goal: "finish lab",
    deadline: "2019"
  },
  {
    goal: "make a cup of tea",
    deadline: "2024"
  },
  {
    goal: "make another cup of tea",
    deadline: "2024"
  }

]);
