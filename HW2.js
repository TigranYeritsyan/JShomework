//1

function filter(arr, value){
    result =  arr.filter(function(item){
        if (item > value)
        return item
    })
    if(result.length === 0){
        return result = "Such values do not exist"
    }else{
        return result
    }
}

alert(filter([1, 1, 2, -3, 0, 8, 4, 0] , 9))

//2

function evenNumbers(val1, val2){
    let result = ""
    while (val1 < val2){
        let odd = false
        let item = val1 + ""
        for (let i = 0; i < item.length; ++i){
            if (item[i] % 2 !== 0 ) {
                odd = true
                val1++
                break
            }
        }
        if (!odd) {
            result +=item + ","
            val1++
        }
    }
    return result === "" ? "Such numbers does not exist." : result 
}

alert(evenNumbers(19,42))

//3

function recurse(value){
    debugger
    if ((value+"").length === 1) {
        return +value % 2 != 0
    }else{
        value = (""+value).split("")
        return value.shift() % 2 != 0 && recurse(+value.join("")) 
    }
}

alert(recurse(532454))


















