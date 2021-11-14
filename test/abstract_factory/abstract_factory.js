var AbstractFactory;
(function (AbstractFactory) {
    class DataServiceFactories {
        static registerDataServiceFactory(name, creator) {
            DataServiceFactories._factories[name] = creator;
        }
        static getDataServiceFactory(name) {
            var creator = DataServiceFactories._factories[name];
            return creator();
        }
    }
    DataServiceFactories._factories = {};
    AbstractFactory.DataServiceFactories = DataServiceFactories;
})(AbstractFactory || (AbstractFactory = {}));
(function (AbstractFactory) {
    var JSOM;
    (function (JSOM) {
        class JSOMListService {
            constructor(siteUrl) {
                this.siteUrl = siteUrl;
            }
            getLists() {
                var result = new Array();
                /*TODO: use JSOM to fill results*/
                result.push("JSOMListResult");
                return result;
            }
        }
        class JSOMListItemService {
            constructor(listUrl) {
                this.listUrl = listUrl;
            }
            getItems(query) {
                var result = new Array();
                /*TODO: use JSOM to fill results*/
                result.push("JSOMListItemResult");
                return result;
            }
        }
        class JSOMContentTypeService {
            constructor(siteUrl) {
                this.siteUrl = siteUrl;
            }
            getContentTypes() {
                var result = new Array();
                /*TODO: use JSOM to fill results*/
                result.push("JSOMContentTypeResult");
                return result;
            }
        }
        class JSOMDataServiceFactory {
            constructor() {
                this._name = "JSOMDataServiceFactory";
            }
            get name() {
                return this._name;
            }
            getListService(siteUrl) {
                return new JSOMListService(siteUrl);
            }
            getListItemService(listUrl) {
                return new JSOMListItemService(listUrl);
            }
            getContentTypeService(siteUrl) {
                return new JSOMContentTypeService(siteUrl);
            }
        }
        AbstractFactory.DataServiceFactories.registerDataServiceFactory("JSOMDataServiceFactory", () => {
            return new JSOMDataServiceFactory();
        });
    })(JSOM = AbstractFactory.JSOM || (AbstractFactory.JSOM = {}));
})(AbstractFactory || (AbstractFactory = {}));
(function (AbstractFactory) {
    var REST;
    (function (REST) {
        class RESTListService {
            constructor(siteUrl) {
                this.siteUrl = siteUrl;
            }
            getLists() {
                var result = new Array();
                /*TODO: use REST to fill results*/
                result.push("RESTListResult");
                return result;
            }
        }
        class RESTListItemService {
            constructor(listUrl) {
                this.listUrl = listUrl;
            }
            getItems(query) {
                var result = new Array();
                /*TODO: use REST to fill results*/
                result.push("RESTListItemResult");
                return result;
            }
        }
        class RESTContentTypeService {
            constructor(siteUrl) {
                this.siteUrl = siteUrl;
            }
            getContentTypes() {
                var result = new Array();
                /*TODO: use REST to fill results*/
                result.push("RESTContentTypeResult");
                return result;
            }
        }
        class RESTDataServiceFactory {
            constructor() {
                this._name = "RESTDataServiceFactory";
            }
            get name() {
                return this._name;
            }
            getListService(siteUrl) {
                return new RESTListService(siteUrl);
            }
            getListItemService(listUrl) {
                return new RESTListItemService(listUrl);
            }
            getContentTypeService(siteUrl) {
                return new RESTContentTypeService(siteUrl);
            }
        }
        AbstractFactory.DataServiceFactories.registerDataServiceFactory("RESTDataServiceFactory", () => {
            return new RESTDataServiceFactory();
        });
    })(REST = AbstractFactory.REST || (AbstractFactory.REST = {}));
})(AbstractFactory || (AbstractFactory = {}));
function fetchData(abstractFactory) {
    console.log("Fetching data using: " + abstractFactory.name);
    var listService = abstractFactory.getListService("sampleSiteUrl");
    var lists = listService.getLists();
    console.log(lists.join("|"));
    var listItemService = abstractFactory.getListItemService("sampleListUrl");
    var listItems = listItemService.getItems("sampleQuery");
    console.log(listItems.join("|"));
    var contentTypeService = abstractFactory.getContentTypeService("sampleSiteUrl");
    var contentTypes = contentTypeService.getContentTypes();
    console.log(contentTypes.join("|"));
}
var DataServiceFactories = AbstractFactory.DataServiceFactories;
var restFactory = DataServiceFactories.getDataServiceFactory("RESTDataServiceFactory");
fetchData(restFactory);
var jsomFactory = DataServiceFactories.getDataServiceFactory("JSOMDataServiceFactory");
fetchData(jsomFactory);
//# sourceMappingURL=abstract_factory.js.map