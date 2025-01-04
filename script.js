const apiBody = document.querySelector(".api_body");
const apiUrl = 'https://icanhazdadjoke.com/';

const fetchData = () => {
    fetch(apiUrl, {
        headers: {
            Accept: "application/json",
        },
    }).then((res) => {
        // console.log(res);
        return res.json();
    }).then((data) => {
        // console.log(data);
        apiBody.innerHTML = data.joke;
    }).catch((error) => {
        apiBody.innerHTML = `Api is not working`;
        // console.log(error);
    })
}

fetchData();

document.getElementById("fetchJoke").addEventListener("click", fetchData);