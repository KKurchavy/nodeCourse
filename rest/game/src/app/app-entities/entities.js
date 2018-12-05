const entities = (function () {

    const applicants = {};

    getArrayFromServer(Developer)
    .then((res) => {
        applicants.developers = res;
    });
    getArrayFromServer(Manager)
    .then((res) => {
        applicants.managers = res;
    });
    getArrayFromServer(Project)
    .then((res) => {
        applicants.projects = res;
    });

    function getArrayFromServer(Class){
        const className = Class.name.toLowerCase();
        let arr = [];
        return new Promise((resolve, reject) => {
            fetch(`${document.location.href}${className}s/`, {method: "get"})
                .then( (res) => res.json() )
                .then((res) => {

                    arr = res.map(element => {
                        element = new Class(element);
                        element.htmlView = filling.createNode(element, className);

                        return element;
                    });
                    
                    resolve(arr);
                })

                .catch((err) => reject(err));
        })

    }

    return applicants;
})();
