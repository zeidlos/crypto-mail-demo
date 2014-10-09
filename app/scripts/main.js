// (function(){
  var btnCrypt = $('.glyphicon-lock')
  var cryptedText
  var pgpMessage
  var preparedMessage

  function prepareText () {
    preparedMessage = text.value.split("\n")
  }

  function textDecrypt () {
    console.log('Decrypted')
    console.log(text.value)
    prepareText()
    pgpMessage = openpgp.message.readAmored(preparedMessage)
    text.value = openpgp.decryptMessage(privateKey, pgpMessage)
  }

  function textEncrypt () {
    console.log('Encrypted')
    console.log(text.value)
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
