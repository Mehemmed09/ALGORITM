function hesablaBMI(boy, ceki) {
    let bmi = ceki / (boy * boy);
    return bmi;
}
let boy = parseInt(prompt("Boyunuzu  daxil edin: "));
let ceki = parseInt(prompt("Çəkinizi  daxil edin: "));

function qeydEtBMI(mehemmed) {
    if (mehemmed > 25) {
        alert("Artıq çəkili");
    } else if (mehemmed >= 18.5 && mehemmed <= 24.9) {
        alert("Normal çəkili");
    } else {
        alert("Ariq çəkili");
    }
}


let bmiMehemmed = hesablaBMI(boy, ceki);
alert("Hesablanan BMI dəyəri: " + bmiMehemmed.toFixed(2));
qeydEtBMI(bmiMehemmed); 