function Person() {
	var subject = "World";
	var person = {};
	person.sayHello = function() {
		console.log("Hello " + subject);
	}
	return person;	
};

var p = new Person();
p.sayHello();
p.subject = "blah";
p.sayHello();