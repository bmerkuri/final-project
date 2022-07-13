export function converter(str){
    const arr = str.split("},");
    let newArr = [];
    arr.map(ele => newArr.push(ele + "}"));
    newArr[newArr.length - 1] = (newArr[newArr.length - 1]).slice(0, -1);
    const lastArr = newArr.map(ele => JSON.parse(ele));
    return lastArr;
}


export function reverseConverter(arr){
    const stringsArr = arr.map(ele => JSON.stringify(ele));
    const result = stringsArr.join(",");
    return result;
}