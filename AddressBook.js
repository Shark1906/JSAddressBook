const readline = require("readline-sync");

let NewAddressBook = new Array();
class AddressBook {

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString() {
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

    let contact = new AddressBook(fName, lName, add, city, state, zip, phoneNumber, email);

    if (validContact(contact) && checkDuplicate(fName+lName)) {
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

let editAddressBook = () => {
    let patternName = RegExp('^([A-Z]{1}[a-z]{2,})$');
    let patternEmail = RegExp('^[0-9a-zA-Z+-._]+@[-+_.0-9a-zA-Z]{1,}.[a-zA-Z]{2,3}.([a-zA-z]{2,3})*$');
    let patternPhone = RegExp('^([0-9]{1,2})\\s([0-9]{10})$');
    let patternZip = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
    let patternAddCityState = RegExp('^[A-Z]{1}[a-z]{3,}$');
    console.log("Enter the Contact Name you want to edit");
    let contactName = String(readline.question());
    let isFound = false;

    for (let i = 0; i < NewAddressBook.length; i++) {
        if (NewAddressBook[i].firstName + NewAddressBook[i].lastName == contactName) {
            let choice;
            do {
                console.log("Enter what you want to edit \n1.Firstname \n2.Lastname \n3.Address"
                    + " \n4.City \n5.State \n6.Email \n7.Zip \n8.Phone \n9.Exit");
                choice = Number(readline.question());
                switch (choice) {
                    case 1:
                        console.log("Enter the new FirstName");
                        let newfName = String(readline.question());
                        if (patternName.test(newfName) && checkDuplicate(newfName+NewAddressBook[i].lastName)) {
                            NewAddressBook[i].firstName = newfName;
                        }else{
                            console.log("Invalid FirstName");
                        }
                        break;

                    case 2:
                        console.log("Enter the new LastName");
                        let newlName = String(readline.question());
                        if (patternName.test(newlName) && checkDuplicate(NewAddressBook[i].firstName+newlName)) {
                            NewAddressBook[i].lastName = newlName;
                        }else{
                            console.log("Invalid LastName");
                        }
                        break;

                    case 3:
                        console.log("Enter the new Address");
                        let newAdd = String(readline.question());
                        if (patternAddCityState.test(newAdd)) {
                            NewAddressBook[i].address = newAdd;
                        }else{
                            console.log("Invalid Address");
                        }
                        break;

                    case 4:
                        console.log("Enter the new City");
                        let newCity = String(readline.question());
                        if (patternAddCityState.test(newCity)) {
                            NewAddressBook[i].city = newCity;
                        }else{
                            console.log("Invalid City");
                        }
                        break;

                    case 5:
                        console.log("Enter the new State");
                        let newState = String(readline.question());
                        if (patternAddCityState.test(newState)) {
                            NewAddressBook[i].state = newState;
                        }else{
                            console.log("Invalid State");
                        }
                        break;

                    case 6:
                        console.log("Enter the new Zip");
                        let newZip = String(readline.question());
                        if (patternZip.test(newZip)) {
                            NewAddressBook[i].zip = newZip;
                        }else{
                            console.log("Invalid Zip");
                        }
                        break;

                    case 7:
                        console.log("Enter the new PhoneNumber");
                        let newPhone = String(readline.question());
                        if (patternPhone.test(newPhone)) {
                            NewAddressBook[i].phoneNumber = newPhone;
                        }else{
                            console.log("Invalid PhoneNumber");
                        }
                        break;

                    case 8:
                        console.log("Enter the new Email");
                        let newEmail = String(readline.question());
                        if (patternEmail.test(newEmail)) {
                            NewAddressBook[i].email = newEmail;
                        }else{
                            console.log("Invalid PhoneNumber");
                        }
                        break;

                    default:
                        break;
                }
            } while (choice != 9);
            isFound = true;
        }
    }
    if (isFound) {
        console.log("Contact Updated Successfully");
    }else{
        console.log("Contact Not Found");
    }
}

let deleteContact = () => {
    console.log("Enter the Contact Name you want to delete");
    let contactName = String(readline.question());
    let isFound = false;
    for (let i = 0; i < NewAddressBook.length; i++) {
        if (NewAddressBook[i].firstName + NewAddressBook[i].lastName == contactName) {
            NewAddressBook.splice(i, 1);
            isFound = true;
        }
    }
    if (isFound) {
        console.log("Contact Deleted Sucessfully");
    }else{
        console.log("Contact Not Found");
    }
}

let getNumOfContacts = () => {
    return NewAddressBook.length;
}

let checkDuplicate = (fullName) => {
    let isDuplicate = true;
    for (let i = 0; i < NewAddressBook.length; i++) {
        if(NewAddressBook[i].firstName + NewAddressBook[i].lastName == fullName){
            isDuplicate = false;
        }
    }
    if(isDuplicate == false){
        console.log("Contact Already Exists with this name");
    }
    return isDuplicate;
}

let input;
do {
    console.log("1. Add Contact\n2. View Contact\n3. Edit Contact\n4. Delete Contact\n5. Get Count of Contact\n6. Exit");
    input = Number(readline.question());
    switch (input) {
        case 1:
            addContact();
            break;

        case 2:
            viewAddressBook();
            break;

        case 3:
            editAddressBook();
            break;

        case 4:
            deleteContact();
            break;

        case 5:
            console.log("Number of Contact in Addressbook : " + getNumOfContacts());
            break;

        default:
            break;
    }
} while (input != 6);

