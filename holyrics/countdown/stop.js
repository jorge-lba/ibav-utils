
function stopCountdown() {
  var confirmar = h.yesNo('Deseja encerrar a contagem regressiva no painel?', 'Encerrar countdown');

  if (confirmar) {
    h.hly('StopCountdownCommunicationPanel');
    h.notification('Countdown encerrado com sucesso!');
  } else {
    h.notification('Operação cancelada.');
  }
}