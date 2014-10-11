'use strict';
// (function(){
  var btnCrypt = $('.crypt')
  var btnSSL = $('.ssl')
  var btnDecrypt = $('.decrypt')
  var btnSend = $('.btn-send')
  var recipient = $('#recipient')
  var pgpMessage
  var mail = {
    topic: 'Cryptoparty Test-Email',
    sender: 'demo@cryptoparty-hamburg.de',
    receiver: 'frank@frank.de',
    message: '',
    timestamp: '',
    ssl: false,
    pgp: false
  }

  var socket = io('http://cryptoterrorist.net:4223')

  socket.on('message', function(data){
    console.log(data)
    if ( data.pgp ) {
      btnDecrypt.show()
    } else {
      btnDecrypt.hide()
    }
    $('.to').text(data.receiver)
    $('.date').text(data.timestamp)
    $('.topic').text(data.topic)
    $('.mail-content').text(data.message)
    if (endpoint) {
      if( data.ssl ) {
        $('.mail-content').text(window.atob(data.message))
      }
    }
    
    if (server) {
      if( data.ssl ) {
        $('.mail-content').text(window.atob(data.message))
      }
    }
    
    if (attacker) {
      if( data.ssl ) {
        $('.sender').text('Can\'t break SSL encryption')
        $('.to').text('Can\'t break SSL encryption')
        $('.date').text('Can\'t break SSL encryption')
        $('.topic').text('Can\'t break SSL encryption')
        $('.mail-content').text('Can\'t break SSL encryption')       
      }
    }
    

  })

  btnDecrypt.hide()
  recipient.on('change', function() {
    mail.receiver = $(this).val()
  })

  btnSend.on('click', function(){
    mail.topic = $('#subject').val()
    mail.timestamp = moment()
    mail.timestamp = moment().format('MMMM Do YYYYY, h:mm:ss a')
    if( btnSSL.hasClass('btn-success') ) {
      mail.message = window.btoa(window.text.value)
    } else {
      mail.message = window.text.value
    }
    
    console.log(mail)
    socket.emit('message', mail)
  })

  btnDecrypt.on('click', function(){
    $('.mail-content').text( textDecrypt( $('.mail-content').text() ) )
  })

  btnSSL.on('click', function(){
    if(mail.ssl) {
      mail.ssl = false
    } else {
      mail.ssl = true
    }

    $(this).toggleClass('btn-danger')
    $(this).toggleClass('btn-success')
  })

  btnCrypt.on('click', function(){
    if( $(this).hasClass('btn-danger') ) {
      window.text.value = textEncrypt(window.text.value)
      $(this).text('Verschlüsselt')
      mail.pgp = true
    } else {
      window.text.value = textDecrypt(window.text.value)
      $(this).text('Verschlüsseln')
      mail.pgp = false
    }
    $(this).toggleClass('btn-danger')
    $(this).toggleClass('btn-success')
  })

// })()
