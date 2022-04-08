function Group(name) {
  return {
    name: name,
  };
}

function Student(name, group) {
  return {
    name: name,
    group: group,
  };
}
const groups = [];
const students = [];

function addGroup(group) {
  groups.push(group);
}

function addStudent(student) {
  students.push(student);
}

function getGroups() {
  return groups;
}

function getStudens() {
  return students;
}

function getStudensByGroupName(groupName) {
  return students.filter(function (student) {
    return student.group === groupName;
  });
}

const groupA = Group("A");
const groupB = Group("B");
const groupC = Group("C");
addGroup(groupA);
addGroup(groupB);
addGroup(groupC);

const student1 = Student("vasya pupkin", "A");
const student2 = Student("virus petya", "B");
const student3 = Student("ivan ivanoff", "B");
const student4 = Student("herman michulin", "C");

addStudent(student1);
addStudent(student2);
addStudent(student3);
addStudent(student4);

console.log("students B", getStudensByGroupName("B"));
console.log("students C", getStudensByGroupName("C"));
