let stu = {
    sName:'Aditya',
    sId:222,
    sPlace:'Pune',
    sCity:{

        sPin:506601,
        sSchool:'Wagh School'
    }
}
console.log(stu);
console.log(Object.keys(stu));
console.log(Object.values(stu));
console.log(Object.entries(stu));

// can not change after freeze in original
let stu2 = Object.freeze(stu)
