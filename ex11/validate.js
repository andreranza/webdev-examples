const obj = {
    q1: {
      question: "an open question",
      answer: "an open answer"
    },
    q2: {
      question: "a closed question",
      choices: ["A", "B", "C"],
      answer: "A"
    }
};

console.log(Object.keys(obj));
console.log(Object.keys(obj["q1"]).includes("choices"));


// Check if obj is an object and not null
if (typeof obj !== 'object' || obj === null) {
  return false;
}
  
// Check if the object has at least one property
if (Object.keys(obj).length === 0) {
  return false;
}
  
// Check each property
for (const key in obj) {
  const value = obj[key];
  
  // Check if the value is an object
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  
  // Check if it has a 'question' property that's a string
  if (typeof value.question !== 'string') {
    return false;
  }
  console.log("hello")
  // Check if it only has the 'question' property
  if (Object.keys(value).length !== 1) {
    return false;
  }
}
  
return true;


