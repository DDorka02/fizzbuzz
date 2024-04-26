function fizzBuzz(szam){
    if (szam === undefined) {
        return "Nincs paraméter";
    }
    if (arguments.length > 1) {
        return "Egynél több paraméter";
    }
    if (isNaN(szam)) {
        return "Nem szám a bemenet";
    }

    szam = parseInt(szam)
    if (szam % 3 === 0) {
        if (szam % 5 === 0) {
            return "fizzBuzz";
        }
        return "fizz";
    }else if (szam % 5 === 0) {
        return "Buzz";
    }else {
        return szam;
    }
}