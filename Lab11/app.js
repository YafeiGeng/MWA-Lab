"use strict";
var university = /** @class */ (function () {
    function university(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    university.prototype.graduation = function (year) {
        console.log('Graduating ' + this.dept +" "+ year + 'student');
    };
    return university;
}());
var mum = new university("MUM", "Computer Science");
mum.graduation(2019);
