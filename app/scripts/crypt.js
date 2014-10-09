
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
        ].join("\n")

var privKey = 
        [
          '-----BEGIN PGP PRIVATE KEY BLOCK-----',
          'Version: GnuPG/MacGPG2 v2.0.22 (Darwin)',
          '',
          'lQHYBFQ2bDYBBADeprHGuR2RXt4COwq25p3pixFJgqoWv5ZynwxtosnJXReW1vnz',
          '/VzwRHgy437/zI5lcV5MzZD7OPTzYvFgjQuPVf0XMu/vzxG8WUAKs5mIjsQs7tYP',
          'dTqkPLiNOVPPJrHxee08oRyiTfpsYKQ970I0BdewqLeeyjV7r9gYVoE21QARAQAB',
          'AAP/T8nBzHqbD3TFL1x0Jv422bH15Hd4N4W5xuKbRBDBqjD7mpj4YsjJTOrkfiwL',
          'X2SxJMY/KlvCWFzdXvj2kgiJes2NdfzcezHEMBOtbQZqHXsxe5rU4EHpPu9Fbd6A',
          'zXsmkrxeot8jUSRyDmpJSQoDgirB33v8nPWG7FPSG4c/aqMCAOrTuQziFRCBr0A4',
          '8aH5964biPDjtcCRFUE8z0td0iYgWZYRciyjZz549GWyx3sWcuIc0jT0GX4+eEx3',
          'Hve/m8cCAPK57XwRrgzfPm3BjTEieYf37/Vfr3HWdtO3BwAvNFEHbWEdpINqdpAL',
          'vbS8xFP56oZ4Y/0GdzpzByxkikfngIMB/j8VnjbOzTGMC0BfhK2xKlkb/sqxZZGT',
          'lDH0pe0MGTH+JnAAVNcLkBgTd4YL3NXXDc56f3NgxTk/ScRkuJXWqmeh9LSFQ3J5',
          'cHRvcGFydHkgRGVtb25zdHJhdGlvbiAoTkVWRVIgVVNFIFRISVMgS0VZIEZPUiBB',
          'TllUSElORyEgUFJJVkFURSBLRVkgSVMgT04gR0lUSFVCIE9OIFBVUlBPU0UhKSA8',
          'ZG8tbm90LXVzZUBjcnlwdG9wYXJ0eS1oYW1idXJnLmRlPoi4BBMBAgAiBQJUNmw2',
          'AhsDBgsJCAcDAgYVCAIJCgsEFgIDAQIeAQIXgAAKCRCGqzKUsDoiKesDBACwkVXN',
          '972Mu6Q/r19VlBONjdMXwNm+rX6FB8nimGjdVPboluJkH5sznhXtrdVRK+FAW4Z4',
          '55bCiluroUcV1SxAFrLecvOSuxSz5EUCL56hr1ELr5uNRpWjPCyvPtMb8UEbSxgL',
          'vL1NV2JLrloL9CAxFv6T31z8UYZVI7R2SxGy5p0B2ARUNmw2AQQAvL4/HIUFlzWh',
          '7QBii0mvn1MYM3UBmLQXBZ9yn2kF/JINzCFJBipa1p6x/V7Itnupbv3qDgjQGzos',
          'O47zgE55ZvyOalMWrPtBP/L0c732NWR4KVucbE79wcVmbFbihmQ1BTZOTKVI4emy',
          'GBJykOGuMFyg9cPFba47YlME1QHsqAkAEQEAAQAD+gKi0fg6TJPKJ94Xmvvtn9P+',
          'hQBO+lWhVw/FvgP6idIqhG8DgstHWY5uyyowbsz+coukyzLxlF2ulQIqvHB5zoAH',
          'pIHrvg8OkuDYwHMLK4p9Ymo1W1V5ib5o8YgjsTgwfxyElyY37gLsxIGgJLymUr9T',
          'bLmSHvqRhY1R/eMxrEPpAgDFvlejS+qw39ibVqNvJjvUDIKw97aeqhOu1c5ppG5S',
          'FZ7F4FvZKI1wWLotpCE9lC/bHcuf9Hh0pRVPAYmPXK1tAgD0WRprjazF9yv70snJ',
          'IAFcQc+7ov6q7HYKuOzK4VN477WBx4XSaTOsGqJgN0suPbuKz9QtrOiqsBq+QY7A',
          'fs+NAf9lFOZu61bg+za/Mr/ZVAm/FCWiT0HN3KLREHBlI/5nTbv/ow7xt5oZxbpa',
          'VZclm/xd7swhTZ5p8v4LxeT+gTPNq8+InwQYAQIACQUCVDZsNgIbDAAKCRCGqzKU',
          'sDoiKaH6BADBV8pL3mZwPlBJ+UHPw+Ja17tObtKuBRcDks6cn4Dey1zkuKh6inHF',
          'P6OaaE/v+GmhBK8FGN5WNTCD+e4W3bSu5cjOCxFlezqFfIbnNrxpvcrObxbdjlg8',
          'V9q4hbgoXEbCcdvSsORcZ6Dh0Vo9ZUAGT3AK474w35MxuG3RMwlK7Q==',
          '=0aJX',
          '-----END PGP PRIVATE KEY BLOCK-----'
        ].join("\n")

var publicKey = openpgp.key.readArmored(pubKey);
var privateKey = openpgp.key.readArmored(privKey).keys[0];
privateKey.decrypt('')

console.log(pgpMessage)