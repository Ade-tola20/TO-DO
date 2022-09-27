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
            let both = [head,list]
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
            new_data.push(both)

            // SAVE NEW HEADER AND LIST TO THE LOCAL STORAGE
            localStorage.setItem('data', JSON.stringify(new_data));

            display();
        }


        // DISPLAY INPUT VALUE TO THE TODO LIST
        function display() {

            let myList = document.getElementById("myUL")

            let fetch = JSON.parse(localStorage.getItem('data'))

            for (let i = 0; i < fetch.length; i++){

                // CREATE LIST ITEM
                let todo_list = document.createElement("li");
                todo_list.setAttribute("class", "list-style")

                // CREATE SPAN AND APPEND TO LIST ITEM
                let todo_header = document.createElement("span");
                todo_header.setAttribute("id",  "span1");
                todo_header.setAttribute("class", "header-style")
                todo_header.textContent = fetch[i][0] 
                todo_list.appendChild(todo_header)

                // CREATE LINE BREAK AND APPEND TO LIST ITEM
                let todo_break = document.createElement("br")
                todo_list.appendChild(todo_break)

                // CREATE SECOND SPAN AND APPEND TO LIST ITEM
                let todo_body = document.createElement('span')
                todo_body.setAttribute("id", "span2")
                todo_body.setAttribute("class", "body-style")
                todo_body.textContent = fetch[i][1]
                todo_list.appendChild(todo_body)
                
                // APPEND LIST UNORDERED LIST
                document.getElementById("myUL").appendChild(todo_list);
            }
            
        }
