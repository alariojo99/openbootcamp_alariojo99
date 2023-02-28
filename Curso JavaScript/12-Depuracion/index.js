const fibonacci = (num) => {
    
   if(num === 1){
    return [1]
   }else if(num === 2){
    return [1,1]
   }else{
    let array = [1,1]

    for (let i= 0; i < num; i++){
        let n = array[i] + array[i+1]
        array = [...array, n]

        if(array.length === num){
            break
        }
    }

    return array
   }

}

console.log(fibonacci(6))
