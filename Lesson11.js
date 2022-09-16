//1)
function greetings(name, time) {

    if(time.includes('hour')){
        time= parseInt(time)*60*60*1000
    };
    if(time.includes('minutes')){
        time= parseInt(time)*1000*60
    }
    if(time.includes('seconds')){
        time= parseInt(time)*1000
    };

    function sayHi() {
        return ( `Привет ${name}` );
      }
    setTimeout(sayHi, time); 

    return sayHi()
}

console.log(greetings('Petr', '5 seconds'))


//2)
let student = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ["html", "css", "js"],
    wife: null
  };

let studentJson =JSON.stringify(student);

//1 вариант
function transformJson(param) {
    if(typeof param === 'string'){
      return param=JSON.parse(param)
    } else{
      return param=JSON.stringify(param)
    }
}
console.log(transformJson(student))
console.log(transformJson(studentJson))

//2 вариант
function transformJson2(param) {
  if(param = JSON.stringify(param)){
    return JSON.parse(param)
  }
  if(param = JSON.parse(param)){
    return JSON.parse(param)
  }
}
console.log(transformJson2(student))
console.log(transformJson2(studentJson))


//3)
let stringJson ='{"name": "John","age": 30,"isAdmin": false,"courses": ["html", "css", "js"],"wife": null}'
let string ='{name: John, age: 30, isAdmin: false}';

function parseValidJson(str) {
  try {
      JSON.parse(str);
      return true;
  } catch (e) {
      console.error(e.message);
      return false;
  }
}
console.log(parseValidJson(stringJson))
console.log(parseValidJson(string))





