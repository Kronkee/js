"use strict";
//ЗАДАНИЕ 1.2

//ES5

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(text) {
    this.text = text;
};

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
};

let message = new AttachedPost('Admin', 'text', 2022);
message.edit('texttext');
message.makeTextHighlighted();
console.log(message);

//ES6

class Post1 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost1 extends Post1 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let message1 = new AttachedPost1('Alice', 'text', 2022);
message1.edit('Hi!');
message1.makeTextHighlighted();
console.log(message1);