const arr = [11,5,0,9,4,21,33,23,11,4,2,3,5,8,0,3,6,8,32,234,54,54,57,3];
function sortArr(arr) {
    while(sortedArray(arr)=="no"){
        for(i=0; i<arr.length-1; i++){
            if(arr[i]>arr[i+1]){
                let x = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = x;
            }
        
        }
    }
    return arr;
};

console.log(sortArr(arr));

function sortedArray(arr){
    for(i=0; i<arr.length; i++){
        if(arr[i]>arr[i+1])
        return "no";
    }
};
