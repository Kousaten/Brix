function StringBuffer() {
    this.__strings__ = [];
};

StringBuffer.prototype.append = function (str) {
    this.__strings__.push(str);
    return this;
};
StringBuffer.prototype.appendFormat = function (str) {
    for (var i = 1; i < arguments.length; i++) {
        var parent = "\\{" + (i - 1) + "\\}";
        var reg = new RegExp(parent, "g")
        str = str.replace(reg, arguments[i]);
    }
 
    this.__strings__.push(str);
    return this;
}
StringBuffer.prototype.toString = function () {
    return this.__strings__.join('');
};
StringBuffer.prototype.clear = function () {
    this.__strings__ = [];
}
StringBuffer.prototype.size = function () {
    return this.__strings__.length;
}
