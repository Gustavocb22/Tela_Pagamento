document.getElementById('btnSubmit').addEventListener('click', function() {
    // Capturando os valores dos inputs
    var nomeCompleto = document.getElementById('nomeCompleto').value;
    var email = document.getElementById('email').value;
    var endereco = document.getElementById('endereco').value;
    var cidade = document.getElementById('cidade').value;
    var estado = document.getElementById('estado').value;
    var cep = document.getElementById('cep').value;
    var nomeCartao = document.getElementById('nomeCartao').value;
    var numeroCartao = document.getElementById('numeroCartao').value;
    var expiraMes = document.getElementById('expiraMes').value;
    var expiraAno = document.getElementById('expiraAno').value;
    var cvv = document.getElementById('cvv').value;

    // Validação simples
    if (!nomeCompleto || !email || !endereco || !cidade || !estado || !cep || !nomeCartao || !numeroCartao || !expiraMes || !expiraAno || !cvv) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Validação adicional para o formato dos dados
    var emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um e-mail válido!');
        return;
    }

    if (numeroCartao.length !== 16 || isNaN(numeroCartao)) {
        alert('Por favor, insira um número de cartão de crédito válido (16 dígitos)!');
        return;
    }

    if (cvv.length !== 3 || isNaN(cvv)) {
        alert('Por favor, insira um CVV válido (3 dígitos)!');
        return;
    }

    // Exemplo de sucesso
    alert('Pagamento processado com sucesso!');
});

// Mostrar formulário Pix ao clicar no botão "Pagar via Pix"
document.getElementById('btnPix').addEventListener('click', function() {
    document.getElementById('formPagamento').style.display = 'none';
    document.getElementById('formPix').style.display = 'block';
});

// Gerar QRCode ao clicar no botão "Gerar QRCode"
document.getElementById('btnSubmitPix').addEventListener('click', function() {
    var nomeCompletoPix = document.getElementById('nomeCompletoPix').value;
    var valorPix = document.getElementById('valorPix').value;

    // Validação dos campos do formulário Pix
    if (!nomeCompletoPix || !valorPix) {
        alert('Por favor, preencha todos os campos do pagamento via Pix!');
        return;
    }

    // Exibir o QRCode e as instruções
    var qr = new QRious({
        element: document.getElementById('qrcode'),
        size: 200,
        value: 'Pagamento via Pix - Nome: ' + nomeCompletoPix + ', Valor: ' + valorPix
    });

    document.getElementById('qrcode').style.display = 'block';
    document.getElementById('instructions').style.display = 'block';
});