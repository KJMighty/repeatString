function repeatString(string, times){
    let myName = '';
    while(times > 0){
        myName += string;
        times--;
    }
    return myName;
}

repeatString('Kai Mighty ', 5);

module.exports = repeatString;