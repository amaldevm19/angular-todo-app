(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/todo.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/todo.service.ts ***!
  \******************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TodoService {
    constructor() {
        this.todos = [];
    }
    getAllTodos() {
        console.log(localStorage.getItem('localData'));
        if (localStorage.getItem('localData') !== null) {
            this.todos = JSON.parse(localStorage.getItem('localData'));
            console.log('Second');
        }
        else {
            var todoArrayData = [
                {
                    id: 1,
                    title: 'Prof.',
                    salution: 'Mr.',
                    firstName: 'Mark',
                    middleName: 'Jacob',
                    lastName: 'Otto',
                    phone: '1234567890',
                    email: 'mark_otto@gmail.com'
                },
                {
                    id: 2,
                    title: 'Dr.',
                    salution: 'Mr.',
                    firstName: 'Jacob',
                    middleName: 'Mark',
                    lastName: 'Thornton',
                    phone: '0987654321',
                    email: 'jacob_thornton@gmail.com'
                }
            ];
            localStorage.clear();
            localStorage.setItem('localData', JSON.stringify(todoArrayData));
            this.todos = JSON.parse(localStorage.getItem('localData'));
            console.log('First');
        }
        return this.todos;
    }
    getTodoById(id) {
        var todoArray = JSON.parse(localStorage.getItem('localData'));
        console.log(todoArray);
        return todoArray.filter(todo => todo.id === id).pop();
    }
    updateTodoById(todo) {
        if (todo.id === 0) {
            var todoArray = JSON.parse(localStorage.getItem('localData'));
            var todoid = todoArray.length;
            todo.id = ++todoid;
            todoArray.push(todo);
            localStorage.setItem('localData', JSON.stringify(todoArray));
        }
        else {
            var todoSaveArray = JSON.parse(localStorage.getItem('localData'));
            todoSaveArray.forEach((element, index, arr) => {
                if (element.id === todo.id) {
                    arr[index] = todo;
                }
                localStorage.setItem('localData', JSON.stringify(todoSaveArray));
            });
        }
        return todo;
    }
    deleteTodoDetail(id) {
        var todoArray = JSON.parse(localStorage.getItem('localData'));
        for (let i in todoArray) {
            if (todoArray[i].id === id) {
                todoArray.splice(i, 1);
            }
            localStorage.setItem('localData', JSON.stringify(todoArray));
        }
    }
}
TodoService.ɵfac = function TodoService_Factory(t) { return new (t || TodoService)(); };
TodoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodoService, factory: TodoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map