        // STORE THE IDs IN A VARIABLE
        let saveEl = document.getElementById("save-el")
        let countEl = document.getElementById("count-el")

        // COUNT STARTS FROM 0
        let count = 0

        function save() {
            // INCREASES COUNT BY 1 WHEN THE ADD BUTTON IS CLICKED
            count += 1
            // THIS CHANGES THE NUMBER OF COUNT WHEN THE ADD BUTTON IS CLICKED
            countEl.textContent = count

            // GET VALUE OF THE IDs
            let head = document.getElementById('head').value
            let list = document.getElementById('add').value

            // STORE BOTH VALUES IN A VARIABLE
            let both = [head, list]
            console.log(both)

            // STORE JAVASCRIPT OBJECT IN A VARIABLE
            let todo = {}

            // HEADER APPEARS BEFORE THE INPUT
            todo[head] = list
            console.log(todo)

            // IF BOTH HEADER AND LIST IS EMPTY SAVE AN EMPTY ARRAY
            if(localStorage.getItem('data') == null){
                localStorage.setItem('data', JSON.stringify([]));
            }

            // PUSH THE HEADER AND THE LIST INTO ARRAY
            let new_data = JSON.parse(localStorage.getItem('data'))
            new_data.push(both);

            // SAVE NEW HEADER AND LIST TO THE LOCAL STORAGE
            localStorage.setItem('data', JSON.stringify(new_data));
    
            display();
        }


        // DISPLAY INPUT VALUE TO THE TODO LIST
        function display () {

            let myList = document.getElementById("myUL")
            myList.replaceChildren()

            let fetch = JSON.parse(localStorage.getItem('data'))
            for (let i = 0; i < fetch.length; i++){
                let li = document.createElement("li");
                li.textContent = fetch[i];
                document.getElementById("myUL").appendChild(li);
            }
            
            
       }

    