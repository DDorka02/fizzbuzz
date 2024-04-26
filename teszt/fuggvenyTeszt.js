QUnit.module('fizzBuzz', function() {
    //alap kérdések, pl. létezik-E?
    QUnit.test('Létezik-E?', assert => {
      assert.ok(fizzBuzz);
    });

    QUnit.test('Függvény-E?', assert => {
        assert.ok(typeof(fizzBuzz) === 'function');
    });
    QUnit.test('Szám: 15', assert => {
        assert.equal(fizzBuzz(15), "fizzBuzz");
    });
    QUnit.test('Szám: 5', assert => {
        assert.equal(fizzBuzz(5), "Buzz");
    });
    QUnit.test('Szám: 3', assert => {
        assert.equal(fizzBuzz(3), "fizz");
    });
    QUnit.test('Szám: 13', assert => {
        assert.equal(fizzBuzz(13), 13);
    });
    QUnit.test('Szám szövegként: 13', assert => {
        assert.equal(fizzBuzz("13"), 13);
    });
    QUnit.test('Szám szövegként: 45', assert => {
        assert.equal(fizzBuzz("45"), "fizzBuzz");
    });
    QUnit.test('Szám szövegként: 6', assert => {
        assert.equal(fizzBuzz("6"), "fizz");
    });
    QUnit.test('Szöveg ami nem tartalmaz számot: kutya', assert => {
        assert.equal(fizzBuzz("kutya"), "Nem szám a bemenet");
    });
    QUnit.test('Tört szám: 6.6', assert => {
        assert.equal(fizzBuzz(6.6), "fizz");
    });
    QUnit.test('Nincs paraméter', assert => {
        assert.equal(fizzBuzz(), "Nincs paraméter");
    });
    QUnit.test('Egynél több paraméter', assert => {
        assert.equal(fizzBuzz(3,5), "Egynél több paraméter");
    });

});