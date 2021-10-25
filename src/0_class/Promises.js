const myPromise = () => {
    return new Promise((resolve, reject) => {
        const a = 5;
        const b = 10;
        if (a + b === 15) {
            resolve("correcto");

        }
        else{
            reject("Incorrecto");

        }
    });

};
console.log(
    myPromise()
        .then(result =>{
            console.log(result);
        })
        .catch((eroor) => {
            console.log(eroor);
        })

);
//myPromise
//.then((msn) =>  console.log(msn))
//.catch((error) => {
//    console.log(error);
//});