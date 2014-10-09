'use strict';
// (function(){
  var btnCrypt = $('.crypt')
  var btnDecrypt = $('.decrypt')
  var btnSend = $('.btn-send')
  var recipient = $('#recipient')
  var pgpMessage
  var mail = {
    topic: 'Cryptoparty Test-Email',
    sender: 'demo@cryptoparty-hamburg.de',
    receiver: 'frank@frank.de',
    message: '',
    timestamp: ''
  }

  var socket = io('http://localhost:4223')

  socket.on('message', function(data){
    console.log(data)
    $('.to').text(data.receiver)
    $('.date').text(data.timestamp)
    $('.topic').text(data.topic)
    $('.mail-content').text(data.message)
    if (endpoint) {
      $('.mail-content').text(textDecrypt(data.message))
    };
    
  })

  recipient.on('change', function() {
    mail.receiver = $(this).val()
  })

  btnSend.on('click', function(){
    mail.topic += ' ' + Date.now()
    mail.timestamp = moment()
    mail.timestamp = moment().format('MMMM Do YYYYY, h:mm:ss')
    mail.message = window.text.value
    console.log(mail)
    socket.emit('message', mail)
  })

  btnDecrypt.on('click', function(){
    $('.mail-content').text( textDecrypt( $('.mail-content').text() ) )
  })

  btnCrypt.on('click', function(){
    if( $(this).hasClass('btn-danger') ) {
      window.text.value = textEncrypt(window.text.value)
      $(this).text('Verschlüsselt')
    } else {
      window.text.value = textDecrypt(window.text.value)
      $(this).text('Verschlüsseln')
    }
    $(this).toggleClass('btn-danger')
    $(this).toggleClass('btn-success')
  })

// })()
