// 1. Pitagoras
function pitagoras(a, b, c) {
  const nums = [a, b, c].sort((x, y) => x - y);
  const wynik = nums[0] ** 2 + nums[1] ** 2 === nums[2] ** 2;
  console.log(`Liczby ${a}, ${b}, ${c} ${wynik ? 'tworzą trójkę pitagorejską' : 'nie tworzą trójki pitagorejskiej'} `);
  return wynik;
}

// 2. Pętla
function petla(a, b, c) {
  console.log(`Liczby z przedziału ${a}-${b} podzielne przez ${c}:`);
  for (let i = a; i <= b; i++) {
    if (i % c === 0) {
      console.log(i);
    }
  }
}

// 3. Tabliczka mnożenia
function tabliczka(n) {
  console.log(`Tabliczka mnożenia ${n}x${n}:`);
  for (let i = 1; i <= n; i++) {
    let wiersz = '';
    for (let j = 1; j <= n; j++) {
      wiersz += (i * j) + ' ';
    }
    console.log(wiersz.trim());
  }
}

// 4. Ciąg Fibonacciego
function fibonacci(n) {
  console.log(`Ciąg Fibonacciego o długości ${n}:`);
  if (n <= 0) return;
  
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    console.log(a);
    const temp = a + b;
    a = b;
    b = temp;
  }
}

// 5. Choinka
function choinka(wysokosc) {
  console.log(`Choinka o wysokości ${wysokosc}:`);
  for (let i = 1; i <= wysokosc; i++) {
    console.log('*'.repeat(i));
  }
}

// 6. Choinka nocą
function choinkaNoca(wysokosc) {
  console.log(`Choinka nocą o wysokości ${wysokosc}:`);
  const szerokosc = wysokosc * 2 - 1;
  
  // Pierwsza linia - pełna
  console.log('*'.repeat(szerokosc));
  
  // Środkowe linie - stopniowo powiększająca się dziura
  for (let i = 1; i < wysokosc - 1; i++) {
    const gwiazdki = wysokosc - i;
    const spacje = szerokosc - 2 * gwiazdki;
    console.log('*'.repeat(gwiazdki) + ' '.repeat(spacje) + '*'.repeat(gwiazdki));
  }
  
  // Ostatnia linia - pełna
  console.log('*'.repeat(szerokosc));
}

// 7. Pola figur: switch
function poleProstokata(a, b) {
  return a * b;
}

function poleTrapezu(a, b, h) {
  return ((a + b) * h) / 2;
}

function poleRownolegloboku(a, h) {
  return a * h;
}

function poleTrojkata(a, h) {
  return (a * h) / 2;
}

function poleFigury(figura, ...wymiary) {
  let pole;
  
  switch(figura.toLowerCase()) {
    case 'prostokat':
      pole = poleProstokata(wymiary[0], wymiary[1]);
      console.log(`Pole prostokąta (a=${wymiary[0]}, b=${wymiary[1]}): ${pole}`);
      break;
    
    case 'trapez':
      pole = poleTrapezu(wymiary[0], wymiary[1], wymiary[2]);
      console.log(`Pole trapezu (a=${wymiary[0]}, b=${wymiary[1]}, h=${wymiary[2]}): ${pole}`);
      break;
    
    case 'rownoleglobok':
      pole = poleRownolegloboku(wymiary[0], wymiary[1]);
      console.log(`Pole równoległoboku (a=${wymiary[0]}, h=${wymiary[1]}): ${pole}`);
      break;
    
    case 'trojkat':
      pole = poleTrojkata(wymiary[0], wymiary[1]);
      console.log(`Pole trójkąta (a=${wymiary[0]}, h=${wymiary[1]}): ${pole}`);
      break;
    
    default:
      console.log('Nieznana figura!');
      return null;
  }
  
  return pole;
}

// Testy funkcji
console.log('\n=== 1. PITAGORAS ===');
pitagoras(3, 4, 5);
pitagoras(5, 4, 3);
pitagoras(2, 3, 4);

console.log('\n=== 2. PĘTLA ===');
petla(10, 30, 5);

console.log('\n=== 3. TABLICZKA MNOŻENIA ===');
tabliczka(3);

console.log('\n=== 4. CIĄG FIBONACCIEGO ===');
fibonacci(8);

console.log('\n=== 5. CHOINKA ===');
choinka(4);

console.log('\n=== 6. CHOINKA NOCĄ ===');
choinkaNoca(6);

console.log('\n=== 7. POLA FIGUR ===');
poleFigury('prostokat', 5, 3);
poleFigury('trapez', 4, 6, 5);
poleFigury('rownoleglobok', 7, 4);
poleFigury('trojkat', 6, 8);

