function myMap(callback){
    var arr = [];
    for(let i=0; i < this.length; i++){
        arr[i] = callback(this[i],i,this);
    } 
    return arr;
}
