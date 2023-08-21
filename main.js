var aar1 = [0,1]

function fibbonacci(seq_length){

    if(seq_length <= 2){
        console.log(aar1.slice(0, seq_length));
        return
    }

    for( var i = 0; i < seq_length -2; i++){    
        aar1.push(aar1[i] + aar1[i+1])    
    }
    console.log(aar1);
}

fibbonacci(5);
