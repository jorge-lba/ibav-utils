# Countdown - Contagem Regressiva para Holyrics

Scripts para contagem regressiva no painel de comunicação do Holyrics, desenvolvidos para a Igreja Batista Água Viva (IBAV) - Sorocaba.

## 📋 Descrição

Este módulo contém dois scripts JavaScript que permitem iniciar e parar uma contagem regressiva no painel de comunicação do Holyrics:

- **`start.js`** - Inicia uma contagem regressiva configurável
- **`stop.js`** - Para a contagem regressiva ativa

## 🚀 Funcionalidades

### Start.js
- Interface para configurar hora e minuto alvo
- Cálculo automático do tempo restante
- Suporte para contagem que passa para o dia seguinte
- Validação de entrada de dados
- Integração com o painel de comunicação do Holyrics

### Stop.js
- Confirmação antes de parar a contagem
- Notificação de sucesso/cancelamento
- Integração direta com o painel de comunicação

## ⚙️ Configuração no Holyrics

### Passo 1: Importar os Scripts

1. Abra o **Holyrics**
2. Vá em **Ferramentas** → **Gatilhos**
3. Clique em **Adicionar** → **Novo Gatilho**
4. Escolha **Tipo**: `Executar Script`

### Passo 2: Configurar o Gatilho de Início

1. **Nome do Gatilho**: `Iniciar Countdown`
2. **Descrição**: `Inicia contagem regressiva no painel`
3. **Tipo**: `Executar Script`
4. **Script**: Copie e cole o conteúdo do arquivo `start.js`
5. **Salvar**

### Passo 3: Configurar o Gatilho de Parada

1. **Nome do Gatilho**: `Parar Countdown`
2. **Descrição**: `Para contagem regressiva no painel`
3. **Tipo**: `Executar Script`
4. **Script**: Copie e cole o conteúdo do arquivo `stop.js`
5. **Salvar**

## 📱 Como Usar

### Para Iniciar a Contagem:

1. Execute o gatilho **"Iniciar Countdown"**
2. Uma janela aparecerá solicitando:
   - **Hora**: Digite a hora alvo (0-23)
   - **Minuto**: Digite o minuto alvo (0-59)
3. Clique em **OK**
4. A contagem regressiva aparecerá no painel de comunicação

### Para Parar a Contagem:

1. Execute o gatilho **"Parar Countdown"**
2. Confirme a ação clicando em **Sim**
3. A contagem será encerrada e uma notificação aparecerá

## 🎯 Casos de Uso

- **Início de cultos**: Definir contagem para o horário de início
- **Intervalo de eventos**: Mostrar tempo restante do intervalo
- **Atividades especiais**: Cronometrar apresentações ou dinâmicas
- **Avisos gerais**: Informar tempo restante para atividades

## ⚡ Exemplos Práticos

### Exemplo 1: Culto das 19h
```
Hora: 19
Minuto: 0
Resultado: Contagem até às 19:00
```

### Exemplo 2: Intervalo de 15 minutos
```
Se agora são 10:30 e você quer 15 minutos:
Hora: 10
Minuto: 45
Resultado: Contagem até às 10:45
```

## 🔧 Personalização

### Modificar o Título
No arquivo `start.js`, linha 45, altere:
```javascript
title: 'Contagem para o evento'
```

### Ajustar Valores Padrão
No arquivo `start.js`, modifique os valores `default_value`:
```javascript
default_value: '19'  // Para hora padrão 19h
default_value: '0'   // Para minuto padrão :00
```

## ⚠️ Observações Importantes

- Se o horário definido já passou hoje, a contagem será para o mesmo horário de amanhã
- Os valores de entrada são validados automaticamente
- É necessário ter o painel de comunicação ativo no Holyrics
- A contagem aparece apenas no painel, não nas telas de projeção

## 🐛 Solução de Problemas

### Erro: "Hora ou minuto inválido"
- Verifique se os valores estão dentro dos limites (0-23 para hora, 0-59 para minuto)
- Certifique-se de digitar apenas números

### Contagem não aparece
- Verifique se o painel de comunicação está ativo
- Confirme se o Holyrics está na versão mais recente
- Teste com valores válidos de hora e minuto

### Script não executa
- Verifique se o código foi copiado corretamente
- Confirme se o gatilho está ativado
- Verifique as permissões de execução de scripts no Holyrics

## 📞 Suporte

Para dúvidas ou problemas com estes scripts, entre em contato com a equipe de tecnologia da IBAV Sorocaba.

---

*Desenvolvido com ❤️ para a Igreja Batista Água Viva - Sorocaba* 