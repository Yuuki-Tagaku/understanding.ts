// const person: {
//     name: string,
//     age: number
// }
const person = {
    name: 'yota',
    age: 30,
    hobbies: ['Sports','Cooking']
}

let favoliteActivities: string[]
favoliteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
    // console.log(hobby.map()) => プロパティ 'map' は型 'string' に存在しません。と表示される。
}