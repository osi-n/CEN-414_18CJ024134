function detA(a,b,c,d){
    let temp = [[a,b],[c,d]]
    return((temp[0][0] * temp[1][1]) - (temp[0][1] * temp[1][0]))
    }
    
    console.log(detA(4,1,3,4))