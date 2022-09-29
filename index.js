const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
]

// const titleCased = () => {
//   return tutorials
// }

// const titleCased = tutorials.map(tutorial => {
//   const words = tutorial.split(" ").map((word =>
//   word[0].toUpperCase() + word.slice(1))); 
//   return words
// })

// const titleCased = () => {
//   tutorials.map(function(tutorials){
//     tutorials = tutorials.split(" ")
//     for(let i = 0; i < tutorials.length; i++){
//       console.log(tutorials[i] = tutorials[i].charAt(0).toUpperCase + tutorials[i].slice(1))
//     }
//     tutorials.join(" ")
//   })
//   return tutorials
// }

// const titleCased = tutorials.map(tutorial => {
//   tutorial.split(" ")
//   tutorial.map((words) => words[0].toUpperCase())
//   tutorial.join(" ")
//   return tutorial
// })

const titleCased = () => {
  return tutorials.map(tutorial => {
    let eachWord = tutorial.split(" ")
    let sentences = eachWord.map((words) => words[0].toUpperCase() + words.slice(1))
    return sentences.join(" ")
  }
)}