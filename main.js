let drink = "Кава";
switch (drink) {
    case "Кава":
        console.log("Ви вибрали каву");
        break;
    case "Чай":
        console.log("Ви вибрали чай");
        break;
    case "Сік":
        console.log("Ви вибрали сік");
        break;
    default:
        console.log("Невідомий вибір");
}
 day = "Субота";
if (["Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця"].includes(day)) {
    console.log("Це робочий день");
} else {
    console.log("Це вихідний день");
}
let month = 7;
if ([12, 1, 2].includes(month)) {
    console.log("Зима");
} else if ([3, 4, 5].includes(month)) {
    console.log("Весна");
} else if ([6, 7, 8].includes(month)) {
    console.log("Літо");
} else if ([9, 10, 11].includes(month)) {
    console.log("Осінь");
} else {
    console.log("Невірний номер місяця");
}
let color = "жовтий";
switch (color) {
    case "червоний":
        console.log("Стоп");
        break;
    case "зелений":
        console.log("Йти");
        break;
    case "жовтий":
        console.log("Чекати");
        break;
    default:
        console.log("Невідомий колір");
}
let num1 = 15;
let num2 = 3;
let operator = "*";
let result;
switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num2 !== 0 ? num1 / num2 : "Помилка: ділення на нуль";
        break;
    default:
        result = "Невідомий оператор";
}
console.log("Результат операції: ", result);