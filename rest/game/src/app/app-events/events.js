const events = (function(){

    function changeButton(button) {
        if(button.innerText == "нанять"){

            button.innerText = "уволить";
            button.classList.add("remove-button");
        } else {

            button.innerText = "нанять";
            button.classList.remove("remove-button");
        }
    }

    function searchElement(htmlView, list) {
        return list.find(
            ({htmlView: hView}) => (hView == htmlView)
        );    
    }

    function fire(elem, list) {
        const currentElem = searchElement(elem, list);
        changeButton(currentElem.htmlView.lastChild);
        
        document.querySelector(".applicants")
                .querySelector("."+ elem.classList[1] +"s")
                .appendChild(currentElem.htmlView);

        list.remove(currentElem);
        
    }

    function hire(elem, list) {
        const currentElem = searchElement(elem, list);
        changeButton(currentElem.htmlView.lastChild);

        document.querySelector(".workers")
            .querySelector("."+ elem.classList[1] +"s")
            .appendChild(currentElem.htmlView);

        return currentElem;    
    }



    return {

        hireHandler(event) {

            if(event.target.className == "hire-button") {

                if(event.target.parentElement.className == "worker developer") {
                    let developer = hire(event.target.parentElement, entities.developers);
                    developers.addDeveloper( developer );
                } else {
                    let manager = hire(event.target.parentElement, entities.managers);
                    managers.addManager( manager );
                }

            }

        },

        fireHandler(event) {
            
            if(event.target.classList[1] == "remove-button") {

                if(event.target.parentElement.className == "worker developer") {
                    fire(event.target.parentElement, developers.all);
                } else {
                    fire(event.target.parentElement, managers.all);
                }

            }

        },

        controllHandler(event){
            const target = event.target;
            const action = target.className;

            const addOpt = document.querySelector(".add-opt");
            const updOpt = document.querySelector(".upd-opt");
            const delOpt = document.querySelector(".del-opt");

            const addButton = addOpt.querySelector("button");
            const updButton = updOpt.querySelector("button");
            const delButton = delOpt.querySelector("button");

            events.setHandler(addButton, () => {
                controller.add(addOpt);
            });

            events.setHandler(updButton, () => {
                controller.update(updOpt);
            });

            events.setHandler(delButton, () => {
                controller.remove(delOpt);
            })

            switch(action) {
                case "add": 
                    controller.changeVisibility(addOpt);
                    break;
                case "update":
                    controller.changeVisibility(updOpt);
                    break;
                case "delete":
                    controller.changeVisibility(delOpt);
                    break;
            }

        },

        setHandler(elem, func) {
            elem.addEventListener("click", func);
        }

    }
})()
