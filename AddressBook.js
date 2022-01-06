const readline = require("readline-sync");

class AddressBook{

    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email) {
        this.firstName = firstName ;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString(){
        return 'Name : ' + this.firstName + this.lastName + ', Add : ' + this.address + ', City : ' + this.city + ', State : ' + this.state +
        ', Zip : ' + this.zip + ', Phone : ' + this.phoneNumber + ', Email : ' + this.email;
    }
}

let addContact = () => {
    console.log('Enter the FirstName');
    let fName = String(readline.question());
    console.log('Enter the LastName');
    let lName = String(readline.question());
    console.log('Enter the Address');
    let add = String(readline.question());
    console.log('Enter the City');
    let city = String(readline.question());
    console.log('Enter the State');
    let state = String(readline.question());
    console.log('Enter the Zip');
    let zip = String(readline.question());
    console.log('Enter the PhoneNumber');
    let phoneNumber = String(readline.question());
    console.log('Enter the Email');
    let email = String(readline.question());

    let contact = new AddressBook(fName,lName,add,city,state,zip,phoneNumber,email);
    console.log(contact.toString());
}

addContact();