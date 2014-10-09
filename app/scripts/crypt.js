'use strict';
// var openpgp = window.openpgp
var pubKey = 

        [ '-----BEGIN PGP PUBLIC KEY BLOCK-----',
          'Version: GnuPG/MacGPG2 v2.0.22 (Darwin)',
          '',
          'mI0EVDZsNgEEAN6msca5HZFe3gI7CrbmnemLEUmCqha/lnKfDG2iycldF5bW+fP9',
          'XPBEeDLjfv/MjmVxXkzNkPs49PNi8WCNC49V/Rcy7+/PEbxZQAqzmYiOxCzu1g91',
          'OqQ8uI05U88msfF57TyhHKJN+mxgpD3vQjQF17Cot57KNXuv2BhWgTbVABEBAAG0',
          'hUNyeXB0b3BhcnR5IERlbW9uc3RyYXRpb24gKE5FVkVSIFVTRSBUSElTIEtFWSBG',
          'T1IgQU5ZVEhJTkchIFBSSVZBVEUgS0VZIElTIE9OIEdJVEhVQiBPTiBQVVJQT1NF',
          'ISkgPGRvLW5vdC11c2VAY3J5cHRvcGFydHktaGFtYnVyZy5kZT6IuAQTAQIAIgUC',
          'VDZsNgIbAwYLCQgHAwIGFQgCCQoLBBYCAwECHgECF4AACgkQhqsylLA6IinrAwQA',
          'sJFVzfe9jLukP69fVZQTjY3TF8DZvq1+hQfJ4pho3VT26JbiZB+bM54V7a3VUSvh',
          'QFuGeOeWwopbq6FHFdUsQBay3nLzkrsUs+RFAi+eoa9RC6+bjUaVozwsrz7TG/FB',
          'G0sYC7y9TVdiS65aC/QgMRb+k99c/FGGVSO0dksRsua4jQRUNmw2AQQAvL4/HIUF',
          'lzWh7QBii0mvn1MYM3UBmLQXBZ9yn2kF/JINzCFJBipa1p6x/V7Itnupbv3qDgjQ',
          'GzosO47zgE55ZvyOalMWrPtBP/L0c732NWR4KVucbE79wcVmbFbihmQ1BTZOTKVI',
          '4emyGBJykOGuMFyg9cPFba47YlME1QHsqAkAEQEAAYifBBgBAgAJBQJUNmw2AhsM',
          'AAoJEIarMpSwOiIpofoEAMFXykveZnA+UEn5Qc/D4lrXu05u0q4FFwOSzpyfgN7L',
          'XOS4qHqKccU/o5poT+/4aaEErwUY3lY1MIP57hbdtK7lyM4LEWV7OoV8huc2vGm9',
          'ys5vFt2OWDxX2riFuChcRsJx29Kw5FxnoOHRWj1lQAZPcArjvjDfkzG4bdEzCUrt',
          '=+V2Y',
          '-----END PGP PUBLIC KEY BLOCK-----'
        ].join('\n')

var privKey = 
        [
          '-----BEGIN PGP PRIVATE KEY BLOCK-----',
          'Version: GnuPG/MacGPG2 v2.0.22 (Darwin)',
          '',
          
          'lQH+BFQ2bDYBBADeprHGuR2RXt4COwq25p3pixFJgqoWv5ZynwxtosnJXReW1vnz',
          '/VzwRHgy437/zI5lcV5MzZD7OPTzYvFgjQuPVf0XMu/vzxG8WUAKs5mIjsQs7tYP',
          'dTqkPLiNOVPPJrHxee08oRyiTfpsYKQ970I0BdewqLeeyjV7r9gYVoE21QARAQAB',
          '/gMDAjzEFfwYOF/d1itbGdC/bjTCbi21L4SOzeKozr8m4nfy5QY+TZDHEoG69mai',
          '7QSYavVPrFVkA35MLSSBvclDbQ8ocE5XACLHxz7ku73vNU+W1JwC/WTEMLAoCO4I',
          '1kv1jveQIFWr+lTMKAtmEXjg3vPHxnOxxlHzW12olSTBZDKVtoF7zMTHRDOk7XL6',
          'C6DvcaQ4bjPREd47qdMxPGR2VEVNJyrWbVb9PSFhqnizJpqYsP9R5Ef1XJDlzrke',
          'T71anfrS9ZUu/CDDSVFd2Kcx4UYGGwR2CVVsh2HJrWQGXlB8cMojQgjar8VC3rpf',
          'AevhgqRz/9B8P9G/YkG3OfjztzfKSgsaGut8uPIJUuArmk2OmTANehPqEzNfvgXQ',
          'leC42Sn+ayEqdP1ylHPMUFe3rLYmR3OKpyb4prOlytgwKKgISbyinENEJ3Dl8oYG',
          'iJAJQFB6t20SGuZxYqk42UPW1+JZynaC4ahyMcMO8M9VtIVDcnlwdG9wYXJ0eSBE',
          'ZW1vbnN0cmF0aW9uIChORVZFUiBVU0UgVEhJUyBLRVkgRk9SIEFOWVRISU5HISBQ',
          'UklWQVRFIEtFWSBJUyBPTiBHSVRIVUIgT04gUFVSUE9TRSEpIDxkby1ub3QtdXNl',
          'QGNyeXB0b3BhcnR5LWhhbWJ1cmcuZGU+iLgEEwECACIFAlQ2bDYCGwMGCwkIBwMC',
          'BhUIAgkKCwQWAgMBAh4BAheAAAoJEIarMpSwOiIp6wMEALCRVc33vYy7pD+vX1WU',
          'E42N0xfA2b6tfoUHyeKYaN1U9uiW4mQfmzOeFe2t1VEr4UBbhnjnlsKKW6uhRxXV',
          'LEAWst5y85K7FLPkRQIvnqGvUQuvm41GlaM8LK8+0xvxQRtLGAu8vU1XYkuuWgv0',
          'IDEW/pPfXPxRhlUjtHZLEbLmnQH+BFQ2bDYBBAC8vj8chQWXNaHtAGKLSa+fUxgz',
          'dQGYtBcFn3KfaQX8kg3MIUkGKlrWnrH9Xsi2e6lu/eoOCNAbOiw7jvOATnlm/I5q',
          'Uxas+0E/8vRzvfY1ZHgpW5xsTv3BxWZsVuKGZDUFNk5MpUjh6bIYEnKQ4a4wXKD1',
          'w8VtrjtiUwTVAeyoCQARAQAB/gMDAjzEFfwYOF/d1oR5PN+Idc70yCMM/MhuFemK',
          'iYUwjnyKfB9pSt5ZPUiqaPJrNHRIqqMX+GTGxvActUMr4h55bh6uq6+kyLFB2Gfq',
          '+mCjHqVs8OFwbdDJ4CEg2QXsj2pU/BLOWtxiFyYcJS1GY1BPrTMAAWE1erZjV4t8',
          't1Zw+ZJHRwf7rJzHe4n7LEg87s7QZ1XPpDmoxzrl/qWnbwJruO9RRtrqO6nEkyeH',
          'Ar+nm2NwctnkGXFcxOnxbg4lwCZXlr45TG7L0UOnBOuP7oosMXDg0BtjcRSu+Rrs',
          'rf6DM6ktWARfL9mVHTUV+1dpIvaxjm71ZEmzldgSwWPSEMQcEzumI10gRq1sVnCf',
          'Sqx+1GmiHdscunewEItGHY/CxIp4HzS4+zdTf6EBjR7RhIL+fpZJbVhF5jU1O8yX',
          'Fc350hbMaOfhBLfUGu6BKeg6EbJD2wHIuKhHJgM2w+W/ZbEOIuj0ieF0drksKd+o',
          'LMNEiJ8EGAECAAkFAlQ2bDYCGwwACgkQhqsylLA6Iimh+gQAwVfKS95mcD5QSflB',
          'z8PiWte7Tm7SrgUXA5LOnJ+A3stc5LioeopxxT+jmmhP7/hpoQSvBRjeVjUwg/nu',
          'Ft20ruXIzgsRZXs6hXyG5za8ab3Kzm8W3Y5YPFfauIW4KFxGwnHb0rDkXGeg4dFa',
          'PWVABk9wCuO+MN+TMbht0TMJSu0=',
          '=NQ7s',
          '-----END PGP PRIVATE KEY BLOCK-----'
        ].join('\n')

var publicKey = openpgp.key.readArmored(pubKey)
var privateKey = openpgp.key.readArmored(privKey).keys[0];
privateKey.decrypt('1234');

function textDecrypt (cryptedText) {
  console.log('Decrypted')
  pgpMessage = openpgp.message.readArmored(cryptedText)
  return openpgp.decryptMessage(privateKey, pgpMessage)
}

function textEncrypt (unencryptedText) {
  console.log('Encrypting')
  return openpgp.encryptMessage(publicKey.keys, unencryptedText)
}