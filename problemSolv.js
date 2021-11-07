function isPalindrome(x) {
   x = x.replace(/[.,?:;\/() _-]/g, '').toLowerCase();
    return x == x.split('').reverse().join('');
    //  x = x.replace(/\W/g , '');
    //  x = x.toLowerCase()

    //  return x === x.reverse()
}