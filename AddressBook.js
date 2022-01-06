const readline = require("readline-sync");

let NewAddressBook = new Array();
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

    if (validContact(contact)) {
        NewAddressBook.push(contact);
    }
}


let validContact = (_AddressBook) => {
    let patternName = RegExp('^([A-Z]{1}[a-z]{2,})$');
    let patternEmail = RegExp('^[0-9a-zA-Z+-._]+@[-+_.0-9a-zA-Z]{1,}.[a-zA-Z]{2,3}.([a-zA-z]{2,3})*$');
    let patternPhone = RegExp('^([0-9]{1,2})\\s([0-9]{10})$');
    let patternZip = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
    let patternAddCityState = RegExp('^[A-Z]{1}[a-z]{3,}$');
    let isValid = true;
    
    if (patternName.test(_AddressBook.firstName) == false) {
        isValid = false;
        console.log("Invalid FirstName");    
    }

    if (patternName.test(_AddressBook.lastName) == false) {
        isValid = false;
        console.log("Invalid LastName");    
    }

    if (patternAddCityState.test(_AddressBook.address) == false) {
        isValid = false;
        console.log("Invalid Address");    
    }

    if (patternAddCityState.test(_AddressBook.city) == false) {
        isValid = false;
        console.log("Invalid City");
    }
    
    if (patternAddCityState.test(_AddressBook.state) == false) {
        isValid = false;
        console.log("Invalid State");
    }

    if (patternZip.test(_AddressBook.zip) == false) {
        isValid = false;
        console.log("Invalid Zip");    
    }

    if (patternPhone.test(_AddressBook.phoneNumber) == false) {
        isValid = false;
        console.log("Invalid Phone Number");    
    }

    if (patternEmail.test(_AddressBook.email) == false) {
        isValid = false;
        console.log("Invalid Email");
    }
    return isValid;
}

let viewAddressBook = () => {
    for (let i = 0; i < NewAddressBook.length; i++) {
        console.log(NewAddressBook[i].toString()); 
    }
}

addContact();
viewAddressBook();