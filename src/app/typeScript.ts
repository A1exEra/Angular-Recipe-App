//////////////////////////////////////
//check if given arrays includes a common item
//inputs array of strings
//input 1
const array1: any[] = ['a', 'b', 'c', 'x'];
//input 2
const array2: any[] = ['z', 'y', 'i'];
//input 3
const array3: any[] = ['z', 'y', 'x'];
//output trure/false

const checkIfArrayHasElement = (arr1: any[], arr2: string | any[]) => {
  let result;
  arr1.forEach((el) => {
    if (arr2.includes(el)) {
      result = el;
    }
  });
  return result !== undefined ? true : false;
};
console.log(checkIfArrayHasElement(array1, array3));
//time complexity should be O(n)
//space coplexity O(1)

function containsCommonItem(arr1, arr2) {
  //loop through first array and create an obj, where props === items in arrray
  let mapObj = {};
  for (let el of arr1) {
    if (!mapObj[el]) {
      const item = el;
      mapObj[item] = true;
    }
  }
  console.log(mapObj);
  //loop through second array and check if item in second arr exists on the arr1 obj
  for (let el of arr2) {
    if (mapObj[el]) {
      return true;
    }
  }
  return false;
  //time compleity should be O(a+b) => O(n)
  //space complexity O(a)
}
console.log(containsCommonItem(array1, array3));
function containsCommonItem1(arr1, arr2) {
  return arr1.some((el) => arr2.includes(el));
}
console.log(containsCommonItem1(array1, array3));
//////////////////////////////////////////////////
//inputs
const input1 = [1, 2, 3, 9];
const input2 = [1, 2, 4, 4];

function checkInputPairs(arr, sum) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
}
console.log(checkInputPairs(input1, 8));
//better approach
function checkInputPairs1(arr, sum) {
  const mySet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) {
      return true;
    } else {
      mySet.add(sum - arr[i]);
    }
  }
  return false;
}
console.log(checkInputPairs1(input2, 8));
////////////////////////////////////////
function checkInputPair2(arr, sum) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + arr[i + 1] === sum) {
      return true;
    }
  }
  return false;
  //time cocplexity O(n)
  //space complexity O(n)
}
console.log(
  `This is the result of the one loop approach: ${checkInputPair2(input2, 8)}`
);

//Primitives
let age: number;
age = 35;
let userName: string;
userName = 'Alex';
let isActive: boolean;
isActive = true;
///Complex types
let hobbies: string[];
hobbies = ['climbing', 'music'];

let person: {
  name: string;
  age: number;
};
person = {
  name: 'Alex',
  age: 35,
};
//Type inference
let course = 'Some text in here';
//course = 123456;

//union types
let unionType: string | number;
unionType = 'this is a string';
unionType = 123456;

//Type Aliases
type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

let newPeron: Person = {
  firstName: 'Alex',
  lastName: 'God Of Code',
  age: 35,
};
let persons: Person[];
///FUNCTIONS AND TYPES
function add(a: number, b: number): number {
  return a + b;
}
function printSomething(): void {
  console.log(`This is dut some text here`);
}

//GENERICS
function insertAtBeginning<GenericType>(
  array: GenericType[],
  value: GenericType
) {
  const newArray = [value, ...array];
}

const demoArray: number[] = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
updatedArray[0].split('');
class Student {
  fName: string;
  lName: string;
  age: number;
  private courses: string[];
  isActive: boolean;

  constructor(
    first: string,
    last: string,
    age: number,
    courses: string[],
    isActive: boolean
  ) {
    this.fName = first;
    this.lName = last;
    this.age = age;
    this.courses = courses;
    this.isActive = isActive;
  }

  enrollStudent(courseName: string) {
    this.courses.push(courseName);
  }

  showCourses() {
    return this.courses.slice();
  }
}
const student = new Student(
  'Alex',
  'Eramisant',
  35,
  ['typescript', 'javascript', 'angular'],
  true
);
student.enrollStudent('mean-stack');
student.showCourses();
////////////EASIER WAY TO CREATE CLASSES
class EasyStudent {
  constructor(
    public firstName: string,
    public LastName: string,
    public age: number,
    private courses: string[],
    private isActive: boolean
  ) {}

  showStatus() {
    return this.isActive;
  }

  enrollOnCourse(newCourse) {
    this.courses.push(newCourse);
  }

  showCourses() {
    return this.courses.slice();
  }
}

const easyStudent = new EasyStudent(
  'Alex',
  'Eramisant',
  35,
  ['typescript', 'javascript', 'angular'],
  true
);
easyStudent.enrollOnCourse('mean-stack');
easyStudent.showStatus();
easyStudent.showCourses();
///INTERFACES are a OBJECT TYPE DEFFINITIONS
interface HUMAN {
  race: string;
  name: string;
  sex: string;
  greet: () => void;
}

const ALEX: HUMAN = {
  race: 'superior',
  name: 'God Of Code',
  sex: 'Yes',
  greet() {
    console.log('Alex greets you all!');
  },
};

class Instructor implements HUMAN {
  race: string;
  name: string;
  sex: string;
  greet: () => void;
}
