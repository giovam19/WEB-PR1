let id = (id) => document.getElementById(id);

let title = id("title"),
    deadline = id("deadline"),
    category = id("category"),
    description = id("description"),
    completed = id("completed"),
    cancel = id("cancel"),
    accept = id("accept");

let mainImage = id("logo"),
    logo1 = id("logo1"),
    logo2 = id("logo2"),
    logo3 = id("logo3"),
    logo4 = id("logo4"),
    logo5 = id("logo5"),
    logo6 = id("logo6");

let warning = id("warning");

var msg = 0;

//control de imagenes
logo1.addEventListener("click", (e) => {
    mainImage.src = logo1.src;
});

logo2.addEventListener("click", (e) => {
    mainImage.src = logo2.src;
});

logo3.addEventListener("click", (e) => {
    mainImage.src = logo3.src;
});

logo4.addEventListener("click", (e) => {
    mainImage.src = logo4.src;
});

logo5.addEventListener("click", (e) => {
    mainImage.src = logo5.src;
});

logo6.addEventListener("click", (e) => {
    mainImage.src = logo6.src;
});

//guardar datos del form
function storageData() {
    var task = {
        "image": mainImage.src,
        "title": title.value,
        "deadline": deadline.value,
        "category": category.value,
        "description": description.value,
        "completed": completed.checked
    };

    localStorage.setItem("prueba", JSON.stringify(task));
}

//control de variables en el form
function engine(id, message) {

    if (id.value.trim().length == 0 || id.value.trim().length > 100) {
        warning.innerHTML = message;
        msg = 1;
    }
}

accept.addEventListener("click", (e) => {
    e.preventDefault();

    msg = 0;

    engine(title, "Title required. Maximun 100 characters length");
    engine(deadline, "Deadline required");
    engine(category, "Please select one category");
    engine(description, "Description required. Maximun 1000 characters length");

    if (msg === 0) {
        warning.innerHTML = "";
        storageData();
        console.log(title.value + " guardado con exito!");
    }
});

//cancelar el form y volver a mainview
cancel.addEventListener("click", (e) => {
    e.preventDefault();
    //obtener datos
    var fTask = JSON.parse(localStorage.getItem("prueba"));

    console.log("image: " + fTask.image)
    console.log("title: " + fTask.title);
    console.log("deadline: " + fTask.deadline);
    console.log("category: " + fTask.category);
    console.log("description: " + fTask.description);
    console.log("completed: " + fTask.completed);
    
});