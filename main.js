function isStartSmaller (start, end) {
    return start <= end;
}

function isOutOfRange (start, end) {
    if (start >= 1 && end <=1000 && start <= 1000 && end >=1)
        return false;
    else
        return true;
}

function createMultiplicationTable (start, end) {
    var multiplicationTabl = '';
    if (!isOutOfRange(start, end) && isStartSmaller(start, end)) {
        for (var n=start;n<=end;n++) {
            for (var m=start;m<n+1;m++) {
            var b=m*n;
            
            multiplicationTabl+= m+"*"+n+"="+b+" ";
            }
            multiplicationTabl += '\n' ;
            }
            return multiplicationTabl;
    }else {
        return null
    }
}

module.exports = {isStartSmaller, isOutOfRange, createMultiplicationTable};