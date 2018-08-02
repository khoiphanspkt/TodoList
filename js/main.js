var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : {
    todo: [],
    completed: []
};

// remove and complete and edit icon in SVG format
var removeSVG = '<svg enable-background="new 0 0 40 40" version="1.1" viewBox="0 0 40 40" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path class="fill" d="M28,40H11.8c-3.3,0-5.9-2.7-5.9-5.9V16c0-0.6,0.4-1,1-1s1,0.4,1,1v18.1c0,2.2,1.8,3.9,3.9,3.9H28c2.2,0,3.9-1.8,3.9-3.9V16 c0-0.6,0.4-1,1-1s1,0.4,1,1v18.1C33.9,37.3,31.2,40,28,40z"/></g><g><path class="fill" d="M33.3,4.9h-7.6C25.2,2.1,22.8,0,19.9,0s-5.3,2.1-5.8,4.9H6.5c-2.3,0-4.1,1.8-4.1,4.1S4.2,13,6.5,13h26.9 c2.3,0,4.1-1.8,4.1-4.1S35.6,4.9,33.3,4.9z M19.9,2c1.8,0,3.3,1.2,3.7,2.9h-7.5C16.6,3.2,18.1,2,19.9,2z M33.3,11H6.5 c-1.1,0-2.1-0.9-2.1-2.1c0-1.1,0.9-2.1,2.1-2.1h26.9c1.1,0,2.1,0.9,2.1,2.1C35.4,10.1,34.5,11,33.3,11z"/></g><g><path class="fill" d="M12.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C13.9,34.6,13.4,35.1,12.9,35.1z"/></g><g><path class="fill" d="M26.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C27.9,34.6,27.4,35.1,26.9,35.1z"/></g><g><path class="fill" d="M19.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C20.9,34.6,20.4,35.1,19.9,35.1z"/></g></svg>';
var completeSVG = '<svg baseProfile="tiny" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Guides__x26__Forms"/><g id="Icons"><g><polygon points="22.186,10.52 14.054,18.652 9.814,14.411 8.4,15.825 14.054,21.48 23.6,11.934   "/></g></g></svg>';
var editSVG = '<svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#929292" id="icon-136-document-edit"><path d="M26.4432278,12.1503345 L15.1570131,23.4499064 L15.1570131,23.4499064 L12.5514465,20.8443397 L23.8435383,9.55064513 L26.4432278,12.1503345 L26.4432278,12.1503345 Z M27.1499164,11.4428096 L28.8790954,9.71158405 C29.269069,9.32114892 29.266195,8.68650423 28.8743,8.29568497 L27.6944866,7.11910998 C27.3018646,6.72756564 26.6692577,6.72452466 26.2779126,7.11592531 L24.5505949,8.84348817 L27.1499164,11.4428096 L27.1499164,11.4428096 Z M11.9037061,21.6108129 L11.2641602,24.7235103 L14.3990645,24.1061713 L11.9037061,21.6108129 L11.9037061,21.6108129 L11.9037061,21.6108129 Z M22,10 L22,10 L16,3 L5.00276013,3 C3.89666625,3 3,3.89833832 3,5.00732994 L3,27.9926701 C3,29.1012878 3.89092539,30 4.99742191,30 L20.0025781,30 C21.1057238,30 22,29.1017876 22,28.0092049 L22,18 L29.5801067,10.4198932 C30.3642921,9.63570785 30.3661881,8.36618809 29.5897496,7.58974962 L28.4102504,6.41025036 C27.6313906,5.6313906 26.372781,5.62721897 25.5801067,6.41989327 L22,10 L22,10 L22,10 Z M21,19 L21,28.0066023 C21,28.5550537 20.5523026,29 20.0000398,29 L4.9999602,29 C4.45470893,29 4,28.5543187 4,28.004543 L4,4.99545703 C4,4.45526288 4.44573523,4 4.9955775,4 L15,4 L15,8.99408095 C15,10.1134452 15.8944962,11 16.9979131,11 L21,11 L11,21 L10,26 L15,25 L21,19 L21,19 L21,19 Z M16,4.5 L16,8.99121523 C16,9.54835167 16.4506511,10 16.9967388,10 L20.6999512,10 L16,4.5 L16,4.5 Z" id="document-edit"/></g></g></svg>'

renderTodoList();

// User clicked on the add button
// If there is any text inside the item field, add that text to the todo list
document.getElementById('addItem').addEventListener('click', function() {
    var value = document.getElementById('item').value;
    if (!value) {
        alert("Do not insert blank context !!!");
    } else if (value) {
        addItem(value);
    }
});

document.getElementById('item').addEventListener('keydown', function(e) {
    var value = this.value;
    if ((e.code === 'Enter' || e.code === 'NumpadEnter') && value) {
        addItem(value);
    }
});

function addItem(value) {


    document.getElementById('item').value = '';

    data.todo.push(value);
    dataObjectUpdated();
    addItemToDOM(value);
    location.reload();
}

function renderTodoList() {
    if (!data.todo.length && !data.completed.length) return;

    for (var i = 0; i < data.todo.length; i++) {
        var value = data.todo[i];
        addItemToDOM(value);
    }

    for (var j = 0; j < data.completed.length; j++) {
        var value = data.completed[j];
        addItemToDOM(value, true);
    }
}

function dataObjectUpdated() {
    localStorage.setItem('todoList', JSON.stringify(data));
}

function removeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    var value = item.innerText;

    var answer = confirm(`Are you want to delete ' ${value} ' from list ?`);
    if (answer) {
        if (id === 'todo') {
            data.todo.splice(data.todo.indexOf(value), 1);
        } else {
            data.completed.splice(data.completed.indexOf(value), 1);
        }
    } else {}
    dataObjectUpdated();
    parent.removeChild(item);
    location.reload();
}

function editItem() {
    var textedit = window.prompt("Enter what you want to edit ...");
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    var value = item.innerText;
    var edittext = textedit.toString();

    var answer = confirm(`Are you want to change ' ${value} ' to ' ${edittext} ' ?`);
    if (answer) {
        if (id === 'todo') {
            data.todo.splice(data.todo.indexOf(value), 1);
            data.todo.push(edittext);
        } else {
            data.completed.splice(data.completed.indexOf(value), 1);
            data.completed.push(edittext);
        }
    } else {
        return;
    }
    dataObjectUpdated();
    location.reload();
}

function completeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    var value = item.innerText;

    if (id === 'todo') {
        data.todo.splice(data.todo.indexOf(value), 1);
        data.completed.push(value);
    } else {
        data.completed.splice(data.completed.indexOf(value), 1);
        data.todo.push(value);
    }
    dataObjectUpdated();

    // Check if the item should be added to the completed list or to re-added to the todo list
    var target = (id === 'todo') ? document.getElementById('completed') : document.getElementById('todo');

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
    location.reload();
}

function countItem() {

    var todocount = data.todo.length;
    var completedcount = data.completed.length;
    var totalcount = todocount + completedcount;

    document.getElementById('total-count').innerHTML = totalcount;
    document.getElementById('todos-count').innerHTML = todocount;
    document.getElementById('completed-count').innerHTML = completedcount;

    dataObjectUpdated();

}

countItem();

// Adds a new item to the todo list
function addItemToDOM(text, completed) {
    var list = (completed) ? document.getElementById('completed') : document.getElementById('todo');

    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeSVG;

    // Add click event for removing the item
    remove.addEventListener('click', removeItem);

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeSVG;

    // Add click event for completing the item
    complete.addEventListener('click', completeItem);

    var edit = document.createElement('button');
    edit.classList.add('edit');
    edit.innerHTML = editSVG;

    // Add click event for editing the item
    edit.addEventListener('click', editItem)

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    buttons.appendChild(edit);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]);
}