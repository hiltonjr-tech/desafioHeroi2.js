function calcularRank(vitorias, derrotas) {

	let saldoVitorias = vitorias - derrotas;
	let heroi = "";

if (vitorias && vitorias <= 10) {
    heroi = "ferro";
} else if (vitorias >= 11 && vitorias <= 20) {
    heroi = "Bronze";
} else if (vitorias >= 21 && vitorias <= 50) {
    heroi = "Prata";
} else if (vitorias >= 51 && vitorias <= 80) {
    heroi = "Ouro";
} else if (vitorias >= 81 && vitorias <= 90) {
    heroi = "Diamante";
} else if (vitorias >= 91 && vitorias <= 100) {
    heroi = "Herói de Lendário";
} else    {
    heroi = "Imortal";
}

 return {
        saldoVitorias,
        heroi
    };
}

let resultado = calcularRank(75,35);

console.log(
    `O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.heroi}`
);

