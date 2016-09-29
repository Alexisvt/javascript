const generatorFunction = function* () {
    while (true) {
        try {
            yield;
        } catch (e) {
            if (e != 'a') {
                throw e;
            }
            console.log('Generator caught', e);
        }
    }
};

const iterator = generatorFunction();
 
iterator.next();
 
try {
    iterator.throw('a');
    iterator.throw('b');
} catch (e) {
    console.log('Uncaught', e);
}
