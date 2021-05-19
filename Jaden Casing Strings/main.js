String.prototype.toJadenCase = function () {

    return this.includes(' ') ? this.charAt(0).toUpperCase() + this.slice(1, this.indexOf(' ') + 1) +
        this.slice(this.indexOf(' ') + 1).toJadenCase() :
        this.charAt(0).toUpperCase() + this.slice(1);
}
/**
 * vs
 * String.prototype.toJadenCase = function () {

    return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
} */