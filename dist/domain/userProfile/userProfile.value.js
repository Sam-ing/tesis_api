"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfileValue = void 0;
class userProfileValue {
    constructor({ id, firstName, lastname, email, password, phoneNumber }) {
        this.id = id !== null && id !== void 0 ? id : undefined;
        this.firstName = firstName;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber !== null && phoneNumber !== void 0 ? phoneNumber : undefined;
    }
}
exports.userProfileValue = userProfileValue;
