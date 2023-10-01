let todoContainer = document.querySelector(".todo-container")
let inProgressContainer = document.querySelector(".inprogress-container")
let reviewContainer = document.querySelector(".review-container")
let doneContainer = document.querySelector(".done-container")

let containerArr = [todoContainer, inProgressContainer, reviewContainer, doneContainer]

let elements = document.getElementsByClassName("element")

/*----------------------------------------------------------------*/


for (const element of elements) {


    element.addEventListener("dragstart", function (e) {

        let element = e.target;

        containerArr.forEach(container => {
            container.addEventListener("dragover", function (e) {
                e.preventDefault();
            })

            container.addEventListener("drop", function () {
                e.preventDefault();
                if(element){
                    container.append(element)
                }
                element = null;

            })
        })
    })
}


