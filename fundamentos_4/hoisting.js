{ //exemplo usando var
    console.log("a =", a);
    var a = 2;
    console.log("a =", a);

// Codigo superior e inferior são iguais por conta do hoisting

    var a;
    console.log("a =", a);
    a = 2;
    console.log("a =", a);
}
