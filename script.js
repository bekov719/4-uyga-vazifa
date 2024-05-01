let random = Math.floor(Math.random() * 100)

alert(random);

if (random % 3 == 0) {
    alert(random + '  sonn fizz 3 ga bolinadi')
} else if (random % 5 == 0) {
    alert(random + '  sonni buzz 5 ga bolinadi')
}else{
    alert(random +  'soni fizz ham buzz ham emas ')
}