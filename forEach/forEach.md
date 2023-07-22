O método `forEach()` é uma função de array em JavaScript que permite percorrer cada elemento de um array e executar uma função para cada um deles. Ele é uma forma mais simples e concisa de iterar por elementos de um array em comparação com o loop `for` tradicional.

Resumo do `forEach()`:

- O `forEach()` é um método disponível em arrays em JavaScript.
- Sintaxe:
  ```javascript
  array.forEach((elemento, indice, array) => {
    // código a ser executado para cada elemento
  });
  ```
- Para cada iteração, a função de callback é chamada com três parâmetros: `elemento` (valor do elemento atual), `indice` (índice do elemento atual) e `array` (o array original que está sendo percorrido).
- O `forEach()` não retorna um novo array e não altera o array original. Ele é usado principalmente para executar uma ação para cada elemento do array.
- A ordem de iteração é garantida, pois o `forEach()` percorre o array na ordem em que os elementos foram inseridos.

Exemplo de uso do `forEach()`:

```javascript
const numeros = [1, 2, 3, 4, 5];

numeros.forEach((numero, indice) => {
  console.log(`Elemento ${indice}: ${numero}`);
});
```

O exemplo acima percorre o array `numeros` e imprime cada elemento no console junto com seu índice:

```
Elemento 0: 1
Elemento 1: 2
Elemento 2: 3
Elemento 3: 4
Elemento 4: 5
```

O `forEach()` é uma maneira fácil e legível de percorrer arrays em JavaScript, e é muito útil quando você precisa executar uma operação para cada elemento do array, como fazer uma ação para cada item ou atualizar valores específicos dentro do array.