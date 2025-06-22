function startCountdown() {
  var result = h.settings('Configurar contagem regressiva', false, [
    {
      type: 'number',
      id: 'hora',
      label: 'Hora',
      default_value: '11',
      min: 0,
      max: 23
    },
    {
      type: 'number',
      id: 'minuto',
      label: 'Minuto',
      default_value: '25',
      min: 0,
      max: 59
    }
  ]);

  if (!result) {
    h.error('Operação cancelada');
    return;
  }

  var hora = parseInt(result['hora'], 10);
  var minuto = parseInt(result['minuto'], 10);

  if (isNaN(hora) || isNaN(minuto)) {
    h.error('Hora ou minuto inválido');
    return;
  }

  var agora = new Date();
  var destino = new Date();
  destino.setHours(hora);
  destino.setMinutes(minuto);
  destino.setSeconds(0);

  if (destino <= agora) {
    destino.setDate(destino.getDate() + 1);
  }

  var segundos = Math.floor((destino.getTime() - agora.getTime()) / 1000);

  h.hly('StartCountdownCommunicationPanel', {
    title: 'Contagem para o evento',
    seconds: segundos
  });
}

