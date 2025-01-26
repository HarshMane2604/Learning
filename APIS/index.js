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
