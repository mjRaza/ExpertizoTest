// import result from "./questions.json";

// export const getAnswers = () => {
//   return result.map((question) => {
//     const data =  shuffleArray([
//       question.correct_answer,
//       ...question.incorrect_answers,
//     ])
//     console.log( data )
//   });
// };

export const shuffleArray = (array) => {
  console.log(array)
  return [...array].sort(() => Math.random() - 0.5);
};
