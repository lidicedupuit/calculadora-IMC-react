import React from 'react';
import styles from './resultadoIMC.module.css';

const ResultadoIMC = ({ imc }) => {
    const classificacao = (imc) => {
      
        if (imc < 18.5) return alert('Abaixo do peso');
        else if (imc >= 18.5 && imc <= 24.9) return alert('Peso normal');
        else if (imc >= 25 && imc <= 29.9) return alert('Sobrepeso');
        else if (imc >= 30 && imc <= 34.9) return alert('Obesidade grau 1');
        else if (imc >= 35 && imc <= 39.9) return alert('Obesidade grau 2');
        else return alert('Obesidade grau 3');
    }

    return (
        <div className={styles.ResultadoIMC}>
            <p>Seu IMC é {imc.toFixed(1)}</p>
            <p>Classificação: {classificacao(imc)}</p>
        </div>
    )
}

export default ResultadoIMC;