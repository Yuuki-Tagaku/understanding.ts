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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONRY"] = 1] = "READ_ONRY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "yota",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
// person.role.push('admin')
// person.role[1] = 10
// person.role = [0, 'admin', 'user']
// Tuple型でより厳密に配列の型を指定してあげることができる
var favoliteActivities;
favoliteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) => プロパティ 'map' は型 'string' に存在しません。と表示される。
}
if (person.role === Role.ADMIN) {
    console.log("管理者ユーザー");
}
