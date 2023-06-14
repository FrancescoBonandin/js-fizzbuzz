// dichiarazione variabili utili

const fizz = "FIZZ";

const buzz = "BUZZ";

const fizzBuzz = fizz + buzz;

const row =  document.querySelector(".row");
 
let   col = document.createElement("div");



// ciclo: incremento i 100 volte
for(let i=1;i <= 100; i++){

    // controllo se i è multiplo sia di 3 che di 5 come prima cosa, 
    //  evitando così l' ingresso nelle altre due condizioni,SE SI stampo fizzbuzz
    if(i % 3 == 0 && i % 5 == 0) {

        row.append(col);
        
       

        col.append(`${fizzBuzz}`);

        console.log(fizzBuzz);
    }


    // controllo se i è multiplo sia di 3,SE SI stampo fizz 
    else if(i % 3 == 0) {

        col=row.append(col);
        
       

        col.append(`${fizz}`);

        console.log(fizz);
    }
    


    // controllo se i è multiplo sia di 5,SE SI stampo buzz
    else if(i % 5 == 0) {

        col=row.append(col);
        
       

        col.append(`${buzz}`);
    

        console.log(buzz);
    }


    // ALTRIMENTI stampo i

    else{

        let cL = col.classList;

        cL.add("col-auto");

        console.log(cL);
        
        col.append(`${i}`);

        col=row.append(col);




        console.log(i);
    }

}