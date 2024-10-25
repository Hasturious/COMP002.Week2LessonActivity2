let myGrade = 50

if (myGrade >= 90) {
    console.log("A");
}
else if (myGrade <= 89 && myGrade >= 80) {
    console.log("B");
}
else if (myGrade <= 79 && myGrade >= 70) {
    console.log("C");
}
else if (myGrade <= 69 && myGrade >= 60) {
    console.log("D");
}
else console.log("F")

switch (myGrade) {
    case (myGrade >= 90 && myGrade <= 100):
        console.log("A");
        break;
    case (myGrade >= 80 && myGrade < 90):
        console.log("B");
        break;
    case (myGrade >= 70 && myGrade < 80):
        console.log("C");
        break;
    case (myGrade >= 60 && myGrade < 70):
        console.log("D");
        break;
    case (myGrade >= 0 && myGrade < 60):
        console.log("F");
        break;
}

// Im a bit more bias to if/else statements as they are easier to read but I understand the utility and clean looking switch case

for(let i = 0;i <=100; i ++) {
    if (i%2 == 1){
        console.log("!")
    }
    else (console.log(i))
}
