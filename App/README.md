# Guess the Number!

Aplicativo desenvolvido utilizando React Native juntamente com o Expo!

## Instalação

Utilizamos o yarn como gerenciador de pacotes, por isso, precisamos dele instalado na sua máquina.

Após instalar o yarn, basta executar o comando:

```bash
yarn
```

Como utilizamos o expo para a criação do aplicativo, também é necessário o [Expo](https://docs.expo.io/get-started/installation/) instalado na sua máquina e no seu smartphone.

## Execução

Após a instalação dos componentes necessários, inicialmente precisamos inicializar o servidor localmente, os passos estão todos descritos no README do folder do Server.

Com o servidor inicializado, agora é a vez de identificarmos o IP da máquina atual, e linka-lo no nosso código. Após identificado, basta adicionar o ip atual no valor da variável 'serverIP' no seguinte arquivo:

```bash
./src/utils/constants.js
```

Após isso, basta executar o comando: 

```bash
npm start
```

Uma janela será aberta no seu browser com o DevTools do Expo, basta escolher a opção desejada no menu lateral para executar o aplicativo na sua máquina. Caso deseje rodar o sistema no seu smartphone, basta abrir o Expo no seu dispositivo e scanear o qr code fornecido.
