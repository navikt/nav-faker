"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var random_1 = __importDefault(require("./random"));
var f_dselsnummer_1 = __importDefault(require("./f\u00F8dselsnummer"));
var NavFaker = /** @class */ (function () {
    function NavFaker() {
        this.fødselsnummer = new f_dselsnummer_1.default(this);
        this.random = new random_1.default();
    }
    NavFaker.prototype.seed = function (seed) {
        this.random = new random_1.default(seed);
    };
    return NavFaker;
}());
exports.default = NavFaker;
