import * as date from './mod/date'
import * as string from './mod/string'
import * as array from './mod/array'
import * as chart from './mod/chart'

export {date, string, array, chart}

console.log('### isFuture (date)')
console.log('31/11/2014 --> ' + date.isFuture(new Date(2014, 11, 31)))
console.log('31/11/2019 --> ' + date.isFuture(new Date(2019, 11, 31)))
console.log('Today --> ' + date.isFuture(Date.now()))
console.log(' ')

console.log('### isAfter (date, dateToCompare)')
console.log('31/11/2014 - 31/11/2019 --> ' + date.isAfter(new Date(2014, 11, 31), new Date(2019, 11, 31)))
console.log('31/11/2019 - 31/11/2014 --> ' + date.isAfter(new Date(2019, 11, 31), new Date(2014, 11, 31)))
console.log('31/11/2014 - 31/11/2014 --> ' + date.isAfter(new Date(2014, 11, 31), new Date(2014, 11, 31)))
console.log(' ')

var testString = 'Welcome to RegExr v2.1 by gskinner.com, proudly hosted by Media Temple!'

console.log('### properCase (string)')
console.log('String : ' + testString)
console.log('stringToProperCase (OLD) --> ' + string.stringToProperCase(testString))
console.log('properCase (NEW) --> ' + string.properCase(testString))
console.log(' ')

// titleCase function directly imported from Voca
console.log('### titleCase (string)')
console.log('String : ' + testString)
console.log('titleCase --> ' + string.titleCase(testString))
console.log(' ')

var testArray = [{'a': 'toto'}, {'b': 'tata'}, {'c': 'tutu'}]
console.log('### inArray (collection, predicate)')
// console.log('Array : ' + _.toString(testArray))
console.log('{"a":"toto"} --> ' + array.inArray(testArray, {'a': 'toto'}))
console.log('{"a":"tata"} --> ' + array.inArray(testArray, {'b': 'toto'}))
console.log('{"b":"toto"} --> ' + array.inArray(testArray, {'a': 'tata'}))
console.log(' ')

// -----------------------------------------------------------------
// -----------------------------------------------------------------
// -----------------------------------------------------------------
/*
function component () {
  var element = document.createElement('div')

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack!!!'], ' ')

  return element
}

document.body.appendChild(component())
*/
