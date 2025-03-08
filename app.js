 let listContainer = document.getElementById('list-container');
    let inputBox = document.getElementById('input-box');

    function addTask() {
        if (inputBox.value === '') {
            alert('Please Enter the Text');
        } else {
            let task = document.createElement('li');
            task.textContent = inputBox.value;
            listContainer.appendChild(task);

            let span = document.createElement('span');
            span.textContent = "\u00d7";
            task.appendChild(span);
            
            span.addEventListener('click', () => {
                task.remove();
                saveData();
            });
        }
        inputBox.value = '';
        saveData();
    }

    listContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked');
            saveData();
        }
    });

    function saveData() {
        localStorage.setItem('data', listContainer.innerHTML);
    }

    function showTask() {
        listContainer.innerHTML = localStorage.getItem('data');
    }

    showTask();
