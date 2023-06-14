// dichiarazione variabili utili

const fizz = "FIZZ";

const buzz = "BUZZ";

const fizzBuzz = fizz + buzz;




for(let i=1;i <= 100; i++){

    if(i % 3 == 0 && i % 5 == 0) {
        console.log(fizzBuzz)
    }

    else if(i % 3 == 0) {
        console.log(fizz)
    }

    else if(i % 5 == 0) {
        console.log(buzz)
    }

   else{
     console.log(i)
    }

}