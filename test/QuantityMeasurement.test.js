const feetToInchConverter = require("../main/QuantityMeasurement")

 test('providefilelocation_whenNumberOfRecodeMatch_TestShouldPass', () =>{
    const isEqual = feetToInchConverter(1, 12);
    return expect(isEqual).toBe(true); 
});