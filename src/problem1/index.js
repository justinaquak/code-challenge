// Arithmetic Progression Formula Solution
var sum_to_n_a = function(n) {
    return n *(n+1) / 2
};

// Iterative Solution
var sum_to_n_b = function(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum 
};

// Recursive Solution
var sum_to_n_c = function(n) {
    if (n == 0) {
        return 0
    }
    return sum_to_n_c(n-1) + n
};