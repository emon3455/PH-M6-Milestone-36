const first = {a:10,b:20};
const second= {a:10,b:20};

function compareObject(first,second){
    const keys1 = Object.keys(first);
    const keys2 = Object.keys(second);

    if(keys1.length === keys2.length){
        for (const key of keys1) {
            if(first[key] !== second[key]){
                return false;
            }
        }
    }
    return true;
}

const isSame = compareObject(first,second);
console.log(isSame);