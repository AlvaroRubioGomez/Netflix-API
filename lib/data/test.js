const myArray = [{
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four'
   },
   {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four'
   },
   {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four'
   }];

const sliced = myArray.map(myObject => {    
    return Object.keys(myObject).slice(0, 2).reduce((result, key) => {
        result[key] = myObject[key];

        return result;
    }, {});    
});

console.log(sliced);