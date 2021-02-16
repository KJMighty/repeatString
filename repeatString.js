function repeatString(string, times){
    let myName = '';
    while(times > 0){
        myName += string;
        times--;
    }
    return myName;
}

module.exports = repeatString;