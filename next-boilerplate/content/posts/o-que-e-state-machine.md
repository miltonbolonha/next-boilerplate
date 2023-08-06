---
layout: post
title: "O que é state machine (máquina de estados) ?"
date: 2020-01-01 00:01:00
image: "/posts/images/homem-computador.jpg"
description: "State machine é o padrão de desenvolvimento web onde você constrói uma máquina e todos os seus dispositivos. Então, a partir dos estados a máquina é gerenciada"
main-class: "dev"
color: "#dd1199"
tags:
  - programacao
  - estado
categories:
twitter_text: "State machine é um padrão de desenvolvimento web."
introduction: "State machine é um padrão de desenvolvimento web, a partir dos estados a máquina é gerenciada."
---

_State machine_ é o padrão de desenvolvimento web onde você constrói uma máquina e todos os seus dispositivos. Então, a partir dos estados a máquina é gerenciada.

O som dos carros quando estão no **MODO RÁDIO** fazem com que o botão _next_ funcione para ir para a próxima estação. Já quando está no **MODO CD** ou **USB** o _next_ funciona para trocar a música.

O botão _next_ no caso é o dispositivo que possui diversas funções e essas funções são acessadas de acordo com o estado ['**MODO'**] em que se encontra o som automotivo.

> _É como se fosse uma ' **programação orientada à estados'**. Como se fosse, viu..._

A partir do '_very first initial begin_' state do seu sistema, você desenvolverá todos os estados e fluxos entre eles, por exemplo: em um botão de enviar, o estado inicial do botão será inativo. Se você clicar no botão, o fluxo do estado pode caminhar tanto para enviar a informação, quanto para dar algum tipo de erro.

Algo interessante é que os estados respeitam o fluxo que você desenvolveu, ou seja, você nunca conseguirá ativar determinado estado, se você não trilhar o caminho que você planejou. Isso torna o impossível, impossível !

Seus estados somente transitarão de um para outro estado da forma com que você desenhou. Veja esse esquema no [**XState Visualizer**](https://xstate.js.org/viz/).

O **XState** é atualmente o mais conhecido auxílio para desenvolvimento de state _machines_. Até mesmo o pessoal da **Microsoft** usa _state machine_ no **Visual Studio Code**. Pois é... estamos deixando passar algo.

Você gostou do artigo? Compartilhe nas suas redes sociais. Hey dev... tks.
