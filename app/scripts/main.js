// (function(){
  var btnCrypt = $('.glyphicon-lock')
  var cryptedText
  var decryptedText
  var pgpMessage
  var preparedMessage

  function textDecrypt () {
    console.log('Decrypted')
    pgpMessage = openpgp.message.readArmored(text.value)
    text.value = openpgp.decryptMessage(privateKey, pgpMessage)
  }

  function textEncrypt () {
    console.log('Encrypting')
    cryptedText = openpgp.encryptMessage(publicKey.keys, text.value);
    text.value = cryptedText
  }

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
