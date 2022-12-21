// const person: {
//     name: string,
//     age: number
// }
// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string],
// } = {
//     name: 'yota',
//     age: 30,
//     hobbies: ['Sports','Cooking'],
//     role: [2, 'author'],
// }

// const ADMIN = 0
// const READ_ONRY = 1
// const AUTHOR =2

enum Role {
  ADMIN = 5,
  READ_ONRY = 100,
  AUTHOR = 200,
}

const person = {
  name: "yota",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push('admin')
// person.role[1] = 10
// person.role = [0, 'admin', 'user']
// Tuple型でより厳密に配列の型を指定してあげることができる

let favoliteActivities: string[];
favoliteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()) => プロパティ 'map' は型 'string' に存在しません。と表示される。
}

if (person.role === Role.ADMIN) {
  console.log("管理者ユーザー");
}
