function isPalindrome(x) {
   x = x.replace(/[.,?:;\/() _-]/g, '').toLowerCase();
    return x == x.split('').reverse().join('');
}