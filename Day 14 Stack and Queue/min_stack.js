/**
 * @author Jim Tony
 */
var MinStack = function() {
    this.st = [];
};
/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.st.length===0) this.st.push({ele:val,min:val});
    else{
        let m = Math.min(this.st[this.st.length-1].min,val);
        this.st.push({ele:val,min:m});
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.st.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.st[this.st.length-1].ele;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.st[this.st.length-1].min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */