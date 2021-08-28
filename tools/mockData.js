const courses = [
  {
    id: 1,
    title: "Unit Testing with Django",
    slug: "unit-testing",
    authorId: 1,
    category: "Testing",
  },
  {
    id: 2,
    title: "Clean Code",
    slug: "clean-code",
    authorId: 2,
    category: "Coding",
  },
  {
    id: 3,
    title: "Pragmatic Programmer",
    slug: "pragmatic-programmer",
    authorId: 3,
    category: "Coding",
  },
];

const authors = [
  { id: 1, name: "Edchel Stephen Nini" },
  { id: 2, name: "Robert Martin" },
  { id: 3, name: "Andy Hunt" },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

module.exports = {
  newCourse,
  courses,
  authors,
};
