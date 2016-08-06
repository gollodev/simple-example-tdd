function AddressBook () {
	this.contacts = [];
	this.initialComplete = false;
}

AddressBook.prototype.addContact = function addContact (contact) {
	if (!contact || typeof contact !== 'object') {
		throw new Error('No valid contact :(');
	}

	this.contacts.push(contact);
}

AddressBook.prototype.getContact = function getContact (index) {
	return this.contacts[index];
}

AddressBook.prototype.deleteContact = function deleteContact (index) {
	this.contacts.splice(index, 1);
}

AddressBook.prototype.getInitialContacts = function getInitialContacts (callback) {
	var self = this;

	setTimeout(function () {
		self.initialComplete = true;
		if (callback) {
			return callback();
		}
	}, 3);
}