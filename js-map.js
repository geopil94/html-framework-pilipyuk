let obj = [
    {
        "_id": "5bb612222222231ca9df4ebc",
        "age": 23,
        "eyeColor": "green",
        "name": "Green Hardin"
    },
    {
        "_id": "5bb61TTTTTTTT31ca9df4ebc",
        "age": 23,
        "eyeColor": "green",
        "name": "Green Hardin"
    },
    {
        "_id": "aaaaaaaacb62b31ca9df4ebc",
        "age": 23,
        "eyeColor": "green",
        "name": "Green Hardin"
    },
    {
        "_id": "5bb61ssssssss31ca9df4ebc",
        "age": 23,
        "eyeColor": "green",
        "name": "Green Hardin"
    }
]

obj.map((element) => element._id);

var arr = [];
obj.forEach((element) => arr.push(element._id));
console.log(arr);