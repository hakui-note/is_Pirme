// script.js
document.getElementById('primeForm').addEventListener('submit', function(e) {
    e.preventDefault(); // フォームのデフォルト動作を防ぐ
    const number = parseInt(document.getElementById('number').value);
    const resultElement = document.getElementById('result');
    const factorsElement = document.getElementById('factors');

    // 結果表示エリアをクリア
    factorsElement.textContent = '';

    if (isNaN(number) || number < 1) {
        resultElement.textContent = '正の整数を入力してください';
        resultElement.style.color = 'red';
        return;
    }

    if (isPrime(number)) {
        resultElement.textContent = `${number} は素数です`;
        // resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `${number} は素数ではありません`;
        // resultElement.style.color = 'red';
        
        // 素因数分解の結果を表示
        const factors = primeFactorization(number);
        factorsElement.textContent = `素因数分解の結果: ${factors.join(' × ')}`;
        // factorsElement.style.color = 'blue';
    }
});

// 素数判定関数
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 素因数分解関数
function primeFactorization(num) {
    const factors = [];
    let divisor = 2;
    
    while (num > 1) {
        while (num % divisor === 0) {
            factors.push(divisor);
            num = num / divisor;
        }
        divisor++;
    }
    
    return factors;
}
