const mockData = require("../../tools/mockData");
const course = mockData.courses;
function showCourses() {
  course.sort(function (a, b) {
    return b.id - a.id;
  });
  course.map((c) => console.log(c.id));
  const pathname = "/404author";
  console.log(pathname.endsWith("author"));
}

showCourses();
