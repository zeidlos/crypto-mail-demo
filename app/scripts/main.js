'use strict';
// (function(){
  var btnCrypt = $('.glyphicon-lock')
  var btnSend = $('.btn-send')
  var recipient = $('#recipient')
  var cryptedText
  var pgpMessage
  var mail = {
    sender: 'demo@cryptoparty-hamburg.de',
    receiver: 'frank@frank.de',
    message: '',
    timestamp: ''
  }

  var socket = io('http://localhost:4223')

  socket.on('connect', function(){
    socket.on('event', function(data){});
    socket.on('disconnect', function(){});
  });

  

  recipient.on('change', function() {
    mail.receiver = $(this).val()
  })

  btnSend.on('click', function(){
    mail.timestamp = Date.now()
    console.log(mail)
    socket.emit('message', mail)
  })

  btnCrypt.on('click', function(){
    if( $(this).hasClass('btn-danger') ) {
      textEncrypt()
      $(this).text('Verschlüsselt')
    } else {
      textDecrypt()
      $(this).text('Verschlüsseln')
    }
    $(this).toggleClass('btn-danger')
    $(this).toggleClass('btn-success')
  })

// })()
