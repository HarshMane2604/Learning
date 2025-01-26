const url = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("Fetching the facts...");
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    factPara.innerText = data[0].text;
}
// Syntax of Fetch API
// fetch(url, options).then(response => response.json()).then(data => console.log(data)).catch(error => console.error('Error:', error));

// Example usage:
// fetch(url)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('There has been a problem with your fetch operation:', error);
//     });
// const getFacts = () => {
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       factPara.innerText = data[0].text;
//     });
// };
btn.addEventListener("click", getFacts);
