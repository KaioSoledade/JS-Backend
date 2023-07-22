JS-Backend-For-of-Media


O `for...of` é uma estrutura de loop introduzida no ECMAScript 6 (ES6) que permite percorrer elementos iteráveis (como arrays, strings, sets, maps, etc.) de forma mais simples e concisa do que o tradicional `for` ou `for...in`.

Resumo do `for...of`:

- O `for...of` é usado para percorrer valores de objetos iteráveis.
- Sintaxe:
  ```javascript
  for (const valor of iteravel) {
    // código a ser executado para cada valor
  }
  ```
- Para cada iteração, a variável `valor` assume o valor atual do elemento iterável.
- O `for...of` não percorre as chaves dos objetos, apenas os valores.
- Funciona com qualquer objeto iterável, como arrays, strings, sets, maps, etc.
- A ordem de iteração é garantida para objetos iteráveis ordenados, como arrays e strings.

Exemplo de uso do `for...of` para percorrer um array:

```javascript
const numeros = [1, 2, 3, 4, 5];

for (const numero of numeros) {
  console.log(numero);
}
```

O exemplo acima percorre o array `numeros` e imprime cada valor no console:

```
1
2
3
4
5
```

O `for...of` é especialmente útil quando se deseja percorrer os valores dos elementos iteráveis sem se preocupar com os índices, tornando o código mais legível e fácil de entender.