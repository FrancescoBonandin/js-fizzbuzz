// dichiarazione variabili utili

const fizz = "FIZZ";

const buzz = "BUZZ";

const fizzBuzz = fizz + buzz;



// ciclo: incremento i 100 volte
for(let i=1;i <= 100; i++){

    // controllo se i è multiplo sia di 3 che di 5 come prima cosa, 
    //  evitando così l' ingresso nelle altre due condizioni,SE SI stampo fizzbuzz
    if(i % 3 == 0 && i % 5 == 0) {

        console.log(fizzBuzz);
    }


    // controllo se i è multiplo sia di 3,SE SI stampo fizz 
    else if(i % 3 == 0) {

        console.log(fizz);
    }


    // controllo se i è multiplo sia di 5,SE SI stampo buzz
    else if(i % 5 == 0) {

        console.log(buzz);
    }


    // ALTRIMENTI stampo i
   else{

     console.log(i);
    }

}