// Массив прогнозов роста (в %)
const prognozRosta = [12, 35, 8, 45, 3, 22, 55];

// Функция поиска максимума
function findMax(tableau) {
    let max = tableau[0];
    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > max) {
            max = tableau[i];
        }
    }
    return max;
}

// Функция фильтрации — только прогнозы выше 20%
function filterHighGrowth(tableau) {
    const resultat = [];
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] > 20) {
            resultat.push(tableau[i]);
        }
    }
    return resultat;
}

// Функция суммы
function calculateSum(tableau) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme;
}

// Функция подсчёта низких прогнозов (<= 5%)
function countLowGrowth(tableau) {
    let count = 0;
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] <= 5) {
            count++;
        }
    }
    const percent = (count / tableau.length) * 100;
    return { count, percent };
}

// --- Логика программы ---

const imya = prompt("Введите ваше имя:");

const max = findMax(prognozRosta);
const highGrowth = filterHighGrowth(prognozRosta);
const sum = calculateSum(prognozRosta);
const average = sum / prognozRosta.length;

alert("Привет, " + imya + "! Средний прогнозируемый рост – " + average.toFixed(1) + "%, " + highGrowth.length + " прогнозов – высокие.");

const lowGrowth = countLowGrowth(prognozRosta);

console.log("Доля низких прогнозов: " + lowGrowth.percent.toFixed(1) + "%");
console.log("Количество низких прогнозов: " + lowGrowth.count);

// Дополнительно: предупреждение если максимум > 50%
if (max > 50) {
    console.log("Некоторые прогнозы выглядят очень амбициозно!");
}