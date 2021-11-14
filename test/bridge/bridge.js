var Bridge;
(function (Bridge) {
    class Record {
        constructor(id, lastModified = new Date()) {
            this.id = id;
            this.lastModified = lastModified;
        }
        get id() {
            return this._id;
        }
        set id(value) {
            this._id = value;
        }
        get lastModified() {
            return this._lastModified;
        }
        set lastModified(value) {
            this._lastModified = value;
        }
        display() {
            console.log(this.id + ":" + this.lastModified);
        }
    }
    class ContactRecord extends Record {
        constructor(id, name, lastModified = new Date()) {
            super(id, lastModified);
            this.name = name;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        display() {
            console.log(this.id + ":" + this.name + ":" + this.lastModified);
        }
    }
    class RecordBridge {
        constructor(implementor) {
            this.implementor = implementor;
        }
        createOrUpdate(item) {
            var exists = false;
            if (item.id) {
                exists = this.implementor.exists(item.id);
            }
            var retVal;
            if (exists) {
                retVal = this.implementor.update(item);
            }
            else {
                retVal = this.implementor.create(item);
            }
            return retVal;
        }
        read(id) {
            return this.implementor.read(id);
        }
        delete(id) {
            this.implementor.delete(id);
        }
    }
    class ContactBridge extends RecordBridge {
        constructor(implementor) {
            super(implementor);
            this.implementor = implementor;
        }
        readByName(name) {
            return this.implementor.readByName(name);
        }
    }
    class TestRepository {
        constructor() {
            this.records = new Array();
            this.records = [new Record(1),
                new Record(2),
                new Record(3)];
        }
        create(item) {
            this.records.push(item);
            return item;
        }
        read(id) {
            var i = this.records.length;
            while (i--) {
                var item = this.records[i];
                if (item.id === id) {
                    return item;
                }
            }
            return null;
        }
        exists(id) {
            return this.records.some((item) => { return item.id === id; });
        }
        update(item) {
            var existingItem = this.read(item.id);
            if (existingItem) {
                var index = this.records.indexOf(existingItem);
                this.records[index] = item;
            }
            return item;
        }
        delete(id) {
            var item = this.read(id);
            if (item) {
                var index = this.records.indexOf(item);
                this.records.splice(index, 1);
            }
        }
    }
    class TestContactRepository extends TestRepository {
        constructor() {
            super();
            this.records = [new ContactRecord(1, "Wesley"),
                new ContactRecord(2, "Norbert"),
                new ContactRecord(3, "Sridhar")];
        }
        readByName(name) {
            return this.records.filter((item) => { return item.name === name; });
        }
    }
    class ProductionRepository {
        constructor() {
            this.records = new Array();
            this.records = [new Record(1),
                new Record(2),
                new Record(3)];
        }
        create(item) {
            this.records.push(item);
            return item;
        }
        read(id) {
            var i = this.records.length;
            while (i--) {
                var item = this.records[i];
                if (item.id === id) {
                    return item;
                }
            }
            return null;
        }
        exists(id) {
            return this.records.some((item) => { return item.id === id; });
        }
        update(item) {
            var existingItem = this.read(item.id);
            if (existingItem) {
                var index = this.records.indexOf(existingItem);
                this.records[index] = item;
            }
            return item;
        }
        delete(id) {
            var item = this.read(id);
            if (item) {
                var index = this.records.indexOf(item);
                this.records.splice(index, 1);
            }
        }
    }
    class ProductionContactRepository extends ProductionRepository {
        constructor() {
            super();
            this.records = [new ContactRecord(1, "Wesley"),
                new ContactRecord(2, "Norbert"),
                new ContactRecord(3, "Sridhar")];
        }
        readByName(name) {
            return this.records.filter((item) => { return item.name === name; });
        }
    }
    var test = true;
    var contactRepository;
    if (test) {
        contactRepository = new TestContactRepository();
    }
    else {
        contactRepository = new ProductionContactRepository();
    }
    var recordBridge = new RecordBridge(contactRepository);
    var record = recordBridge.read(1);
    record.display();
    var contactBridge = new ContactBridge(contactRepository);
    var contact = contactBridge.readByName("Norbert")[0];
    contact.display();
    contact.name = "Norbert Cseffai";
    contactBridge.createOrUpdate(contact);
    contact.display();
})(Bridge || (Bridge = {}));
//# sourceMappingURL=bridge.js.map