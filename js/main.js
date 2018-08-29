!function(doc) {

    var removeSVG = '<svg enable-background="new 0 0 40 40" version="1.1" viewBox="0 0 40 40" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path class="fill" d="M28,40H11.8c-3.3,0-5.9-2.7-5.9-5.9V16c0-0.6,0.4-1,1-1s1,0.4,1,1v18.1c0,2.2,1.8,3.9,3.9,3.9H28c2.2,0,3.9-1.8,3.9-3.9V16 c0-0.6,0.4-1,1-1s1,0.4,1,1v18.1C33.9,37.3,31.2,40,28,40z"/></g><g><path class="fill" d="M33.3,4.9h-7.6C25.2,2.1,22.8,0,19.9,0s-5.3,2.1-5.8,4.9H6.5c-2.3,0-4.1,1.8-4.1,4.1S4.2,13,6.5,13h26.9 c2.3,0,4.1-1.8,4.1-4.1S35.6,4.9,33.3,4.9z M19.9,2c1.8,0,3.3,1.2,3.7,2.9h-7.5C16.6,3.2,18.1,2,19.9,2z M33.3,11H6.5 c-1.1,0-2.1-0.9-2.1-2.1c0-1.1,0.9-2.1,2.1-2.1h26.9c1.1,0,2.1,0.9,2.1,2.1C35.4,10.1,34.5,11,33.3,11z"/></g><g><path class="fill" d="M12.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C13.9,34.6,13.4,35.1,12.9,35.1z"/></g><g><path class="fill" d="M26.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C27.9,34.6,27.4,35.1,26.9,35.1z"/></g><g><path class="fill" d="M19.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C20.9,34.6,20.4,35.1,19.9,35.1z"/></g></svg>';
    var completeSVG = '<svg baseProfile="tiny" height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Guides__x26__Forms"/><g id="Icons"><g><polygon points="22.186,10.52 14.054,18.652 9.814,14.411 8.4,15.825 14.054,21.48 23.6,11.934   "/></g></g></svg>';
    var editSVG = '<svg enable-background="new 0 0 32 32" height="22px" version="1.1" viewBox="0 0 32 32" width="22px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M29.395,2.58C27.75,0.937,25.584,0,23.449,0c-1.801,0-3.459,0.668-4.67,1.877l-4.867,4.904  c-0.015,0.014-0.032,0.023-0.047,0.038c-0.008,0.008-0.013,0.019-0.021,0.026l0.002,0.002L3.517,17.256  c-0.476,0.473-0.821,1.062-1.013,1.705l-2.349,8.508C0.153,27.492,0,28.16,0,28.5C0,30.432,1.569,32,3.504,32  c0.385,0,1.13-0.184,1.157-0.188l8.478-2.229c0.644-0.191,1.229-0.539,1.705-1.016l15.263-15.383  C32.883,10.406,32.57,5.75,29.395,2.58z M16.014,23.795c-0.082-0.902-0.337-1.787-0.719-2.627l9.455-9.454  c0.578,1.826,0.281,3.736-0.986,5.004c-0.008,0.008-0.018,0.013-0.025,0.021l0.014,0.013l-7.728,7.79  C16.025,24.293,16.037,24.049,16.014,23.795z M14.793,20.256c-0.373-0.613-0.797-1.205-1.322-1.729  c-0.611-0.611-1.312-1.09-2.044-1.492l9.532-9.532c0.748,0.332,1.465,0.805,2.098,1.438c0.541,0.539,0.959,1.143,1.281,1.771  L14.793,20.256z M10.486,16.562c-0.926-0.373-1.896-0.586-2.868-0.599l7.703-7.762c1.179-1.15,2.896-1.481,4.587-1.062  L10.486,16.562z M4.167,29.873C4.058,29.898,3.719,29.984,3.489,30C2.667,29.99,2,29.322,2,28.5  c0.012-0.168,0.079-0.457,0.102-0.562l1.053-3.814c1.143-0.031,2.373,0.414,3.34,1.383c0.982,0.98,1.444,2.234,1.394,3.391  L4.167,29.873z M8.874,28.637c-0.024-1.342-0.57-2.738-1.672-3.838C6.16,23.756,4.796,23.154,3.436,23.1l0.996-3.607  c0.072-0.24,0.215-0.477,0.391-0.684c2.006-1.436,5.091-1.012,7.234,1.133c2.267,2.266,2.617,5.586,0.871,7.568  c-0.116,0.061-0.233,0.119-0.359,0.156L8.874,28.637z M28.691,11.772l-1.684,1.697c0-0.226,0.027-0.443,0.006-0.674  c-0.176-1.935-1.078-3.806-2.543-5.269c-1.629-1.63-3.789-2.565-5.928-2.571l1.656-1.67C21.027,2.458,22.184,2,23.449,2  c1.609,0,3.262,0.728,4.533,1.995c1.193,1.191,1.904,2.671,2.006,4.168C30.082,9.56,29.621,10.841,28.691,11.772z" /></svg>';
   
    var createElement = doc.createElement.bind(doc),
        getElement = doc.getElementById.bind(doc);   

    var TodoList = {
        data: { todos: [] },

        totalCountSpan: null,
        todosCountSpan: null,
        completedCountSpan: null,
        addButton: null,
        todoEle: null,
        itemEle: null,
        addButton: null,
        markAllCompletedBtn: null,
        clearAllCompletedBtn: null,
        showAllBtn: null,
        showActiveBtn: null,
        showCompletedBtn: null,
        isAllCompleted: null,
        todoList: null,
        isAllCompleted: null,
        uiTodos:null,

        init: function init() {
            // init data
            this.todoList = localStorage.getItem('todoList');
            if (this.todoList) {
                this.data = JSON.parse(this.todoList);
            }
            // query DOM's elements
            this.totalCountSpan = getElement('total-count');
            this.todosCountSpan = getElement('todos-count');
            this.completedCountSpan = getElement('completed-count');
            this.addButton = getElement('addItem');
            this.todoEle = getElement('todo');
            this.itemEle = getElement('item');
            this.markAllCompletedBtn = getElement('all-completed');
            this.clearAllCompletedBtn = getElement('clear-completed-btn');
            this.showAllBtn = getElement('all');
            this.showActiveBtn = getElement('active');
            this.showCompletedBtn = getElement('completed');
            this.uiTodos = this.data.todos;

            // register events
            this._registerEvents();
            this._refresh();
            this.addItemToDOM(todo);
        },

        _registerEvents: function _registerEvents() {
            this.addButton.addEventListener('click', this.buttonAdd.bind(TodoList));
            this.itemEle.addEventListener('keydown', this.insertItem.bind(TodoList));
            this.markAllCompletedBtn.addEventListener('click', this.markAllCompleted.bind(TodoList));
            this.clearAllCompletedBtn.addEventListener('click', this.clearAllCompleted.bind(TodoList));
            this.showAllBtn.addEventListener('click', this.showAll.bind(TodoList));
            this.showActiveBtn.addEventListener('click', this.showActive.bind(TodoList));
            this.showCompletedBtn.addEventListener('click', this.showCompleted.bind(TodoList));
        },

        buttonAdd: function() {
            var value = this.itemEle.value;
            if (!value) {
                alert("do not add blank context!!!");
            } else {
                this.addItem(value);
            }
        },

        insertItem: function(e) {
            var value = this.itemEle.value;
            if ((e.code === 'Enter' || e.code === 'NumpadEnter') && value) {
                this.addItem(value);
            }
        },

        addItem: function(value) {
            var ID = new Date().getTime();
            var newItem = {
                id: ++ID,
                value: value,
                status: 0
            }
            this.addItemToDOM(newItem);
            this.itemEle.value = '';
            this.data.todos.push(newItem);
            localStorage.setItem('todoList', JSON.stringify(this.data));
            this._refresh();
        },

        markAllCompleted: function() {
            this.isAllCompleted = !this.isAllCompleted;
            for (var i in this.data.todos) {
                this.data.todos[i].status = Number(this.isAllCompleted);
            }
            localStorage.setItem('todoList', JSON.stringify(this.data));
            this._refresh();
        },

        clearAllCompleted: function() {
            var ItemsToDel = this.data.todos.filter(todo => todo.status !== 1);

            this.data.todos = ItemsToDel;
            localStorage.setItem('todoList', JSON.stringify(this.data));
            this.uiTodos = this.data.todos;
            this._refresh();
        },

        sortIncrease: function() {
            this.data.todos.sort((a,b) => Number(b.id) - Number(a.id));
        },

        _getActiveItems: function() {
            return this.data.todos.filter(todo => todo.status === 0);
        },

        _getCompletedItems: function() {
            return this.data.todos.filter(todo => todo.status === 1);
        },

        showAll: function() {
            this.uiTodos = this.data.todos;
            this._refresh();
        },

        showActive: function() {
            this.uiTodos = this._getActiveItems();
            this._refresh();
        },

        showCompleted: function() {
            this.uiTodos = this._getCompletedItems();
            this._refresh();
        },

        _refresh: function(){
            this.sortIncrease();
            this.todoEle.innerHTML = '';
            this.uiTodos.forEach(todo => this.addItemToDOM(todo));

            var completedItems = this._getCompletedItems(),
                activeItems = this._getActiveItems();

            var activeCount = activeItems.length,
                completedCount = completedItems.length,
                totalCount = activeCount + completedCount;
            this.totalCountSpan.innerHTML = totalCount;
            this.todosCountSpan.innerHTML = activeCount;
            this.completedCountSpan.innerHTML = completedCount;
        },

        completedItem: function(todoId){
            for (var i in this.data.todos) {
                if (this.data.todos[i].id === todoId) {
                    if (this.data.todos[i].status === 0) {
                        this.data.todos[i].status = 1;
                    } else {
                        this.data.todos[i].status = 0;
                    }
                }
            }
            localStorage.setItem('todoList', JSON.stringify(this.data));
            this._refresh();
    },

        removeItem: function(todoId) {
        var itemRemove = this.data.todos.filter(todo => todoId !== todo.id);
        this.data.todos = itemRemove;
        localStorage.setItem('todoList', JSON.stringify(this.data));  
        this.uiTodos = this.data.todos;
        this._refresh();
    },
        editItem: function(todoId) {
        var stringChange = prompt("Enter what you want to change : ");
        for (var i in this.data.todos) {
            if (!stringChange) {
                return;
            } else if (this.data.todos[i].id === todoId) {
                this.data.todos[i].value = stringChange.toString();
            }
        }
        localStorage.setItem('todoList', JSON.stringify(this.data));
        this._refresh();
    },

     addItemToDOM: function(todo) {
        var completed = Boolean(todo.status);
        var list = this.todoEle;
            completedCss = completed ? 'completed' : 'active',
            item = createElement('li');
        if (completed) {
            item.classList.add(completedCss);
        } else {
            item.classList.add(completedCss);
        }
        item.innerText = todo.value;
    
        var buttons = createElement('div');
        buttons.classList.add('buttons');
    
        // Add click event for removing the item
        var remove = createElement('button');
        remove.classList.add('remove');
        remove.innerHTML = removeSVG;
        remove.addEventListener('click', this.removeItem.bind(TodoList,todo.id));
    
        var complete = document.createElement('button');
        complete.classList.add('complete');
        complete.innerHTML = completeSVG;
        complete.addEventListener('click', this.completedItem.bind(TodoList,todo.id));
    
        // Add click event for editing the item
        var edit = document.createElement('button');
        edit.classList.add('edit');
        edit.innerHTML = editSVG;
        edit.addEventListener('click', this.editItem.bind(TodoList,todo.id));
    
        buttons.appendChild(remove);
        buttons.appendChild(complete);
        buttons.appendChild(edit);
        item.appendChild(buttons);
        list.appendChild(item);
        }
    }

    TodoList.init();

    // Use function
    // function TodoList(...) {

    // }

    // TodoList.prototype.init = function () {

    // }

    // var buttonAdd = model._buttonAdd.bind(model);
    // addButton.addEventListener('click', buttonAdd);

    // var insertItem = model._insertItem.bind(model);
    // itemEle.addEventListener('keydown',insertItem);

    // var allCompleted = model._markAllCompletedBtn.bind(model);
    // markAllCompleted.addEventListener('click', allCompleted);

    // var clearAllCompleted = model._clearAllCompleted.bind(model);
    // clearAllCompletedBtn.addEventListener('click', clearAllCompleted);

    // var showAll = model._showAll.bind(model);
    // showAllBtn.addEventListener('click', showAll);

    // var showActive = model._showActive.bind(model);
    // showActiveBtn.addEventListener('click', showActive);

    // var showCompleted = model._showCompleted.bind(model);
    // showCompletedBtn.addEventListener('click', showCompleted);

    // var addItemtoDOM = model._addItemToDOM.bind(model);
    // addItemtoDOM(todo);

    // var refresh = model._refresh.bind(model);
    // refresh();


}(document);

