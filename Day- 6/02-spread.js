const defaultDetails = {
  name: "N/A",
  author: "N/A",
  authorAge: null,
};

const book2 = {
  name: "Harry Potter II: Chamber of Secrets",
  authorAge: 45,
};

// Always give defaultDetails (first)
// console.log({ ...defaultDetails, ...book2 });

const fullDetails = {
  ...defaultDetails,
  authorAge: 35,
  ...book2,
  year: 2002,
  pages: 405,
};

console.log(fullDetails);