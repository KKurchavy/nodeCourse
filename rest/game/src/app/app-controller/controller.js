const controller = (() => {

    function getElementByOptions(type, options) {
        const obj = {};
        switch(type) {
            case "developer": 
                obj.name = options[0];
                obj.surname = options[1];
                obj.level = options[2];
                obj.salary = +options[3];
                break;
            case "manager":
                obj.name = options[0];
                obj.surname = options[1];
                obj.experience = +options[2];
                obj.salary = +options[3];
                break;
            case "project":
                obj.name = options[0];
                obj.cost = +options[1];
                obj.linesCount = +options[2];
        }
        
        return obj;
    }

    return {

        add(optionsNode) {
            const childsList = optionsNode.querySelectorAll("input");
            const OPTIONS = [].map.call(childsList, (element) => {
                return element.value;
            });
    
            const TYPE = OPTIONS[0];
            const element = getElementByOptions(TYPE, OPTIONS.slice(1));
    
            const path = `${document.location.href}${TYPE}s/`;
            const body = JSON.stringify(element);
    
            fetch(path, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: body
            });
        },
    
        update(optionsNode) {
            const childsList = optionsNode.querySelectorAll("input");
            const OPTIONS = [].map.call(childsList, (element) => {
                return element.value;
            });
    
            const TYPE = OPTIONS[0];
            const oldName = OPTIONS[1];
            const element = getElementByOptions(TYPE, OPTIONS.slice(2));
    
            const path = `${document.location.href}${TYPE}s/${oldName}`;
            const body = JSON.stringify(element);
    
            fetch(path, {
                method: "put",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: body
            });
        },
    
        remove(optionsNode) {
            const childsList = optionsNode.querySelectorAll("input");
            const OPTIONS = [].map.call(childsList, (element) => {
                return element.value;
            });
    
            const TYPE = OPTIONS[0];
            const oldName = OPTIONS[1];
    
            const path = `${document.location.href}${TYPE}s/${oldName}`;
    
            fetch(path, {
                method: "delete"
            });
        },
    
        changeVisibility(element) {
            const visibility = element.classList[1];
    
            if(visibility == "hidden") {
                element.classList.remove("hidden");
            } else {
                element.classList.add("hidden");
            }
        }
        
    }

})();