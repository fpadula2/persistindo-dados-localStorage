const tasks = [];


const localTasks = localStorage.getItem("theme");

const convertedTasks = JSON.parse(localTasks);

const createTaskItem = (obj) => {
    const cardLi = document.createElement("li");
    const listDiv = document.createElement("div");
    const listP = document.createElement("p");
    const listButton = document.createElement("button");

    listP.innerText = obj.title;
    listButton.innerText = "Excluir";
    cardLi.classList.add("list");
    listDiv.classList.add("div__task");
    listButton.classList.add("btn-remove__task");

    listDiv.append(listP, listButton)
    cardLi.appendChild(listDiv);

    const arrayComNovoItemJSON = JSON.stringify(tasks);
    localStorage.setItem('listaDeAfazeres', arrayComNovoItemJSON);


    listButton.addEventListener("click", function () {
        const index = tasks.indexOf(obj);
        tasks.splice(index, 1);

        const arrayComNovoItemJSON = JSON.stringify(tasks);
        localStorage.setItem('listaDeAfazeres', arrayComNovoItemJSON);


        renderElements(tasks)
        verifylengtharray(tasks);
    })

    return cardLi
}

const renderElements = (arr) => {
    const list = document.querySelector(".list__container");
    list.innerHTML = "";

    arr.forEach((item) => {
        list.appendChild(createTaskItem(item));
    })
}

renderElements(tasks);

const buttonAdd = document.querySelector(".add");
const titleTask = document.querySelector("#text");

buttonAdd.addEventListener("click", function (event) {
    event.preventDefault();
    const input = titleTask.value;
    const newObj = {
        title: input,
    };
    tasks.push(newObj);

    renderElements(tasks);
    verifylengtharray(tasks);
})

const h3 = document.querySelector("h3");



const verifylengtharray = (arr) => {
    tasks.length > 0 ? h3.style.display = "none" : h3.style.display = "block"
}