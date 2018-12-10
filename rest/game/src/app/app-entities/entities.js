const entities = (() => { 

    function getArrayFromServer(Class) {
        const className = Class.name.toLowerCase();
        let arr = [];

        return new Promise((resolve, reject) => {
            fetch(`${document.location.href}${className}s/`, { method: "get" })
                .then((res) => res.json())
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
        
    return {

        async getAll() {
            this.developers = await getArrayFromServer(Developer);
            this.managers = await getArrayFromServer(Manager);
            this.projects = await getArrayFromServer(Project);
        }

    }

})();
