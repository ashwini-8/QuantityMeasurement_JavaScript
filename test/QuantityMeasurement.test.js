const feetToInchConverter = require("../main/QuantityMeasurement")

 test('providefilelocation_whenNumberOfRecordsMatch_TestShouldPass', () =>{
    const isEqual = feetToInchConverter(1, 12);
    return expect(isEqual).toBe(true); 
});

test('givenZeroInput_whenNumberOfRecordsMatch_TestShouldPass', () =>{
    const isEqual = feetToInchConverter(0, 0);
    return expect(isEqual).toBe(true); 
});