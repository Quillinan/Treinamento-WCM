// Função para enviar e-mail
function enviarEmail() {
    var emailAdmin = "milton.quillinan1798@gmail.com";
    var assunto = "Notificação de Novo Formulário em andamento";
    var corpoEmail = "Um novo formulário está sendo preenchido";

    var parametros = {
        "subject": assunto,
        "templateId": "template_padrao",
        "model": {
            "mensagem": corpoEmail
        },
        "to": "Milton Quillinan"
    };

    var emailService = fluigAPI.getAuthorizeService().getEndpoint("email");
    var response = emailService.post(JSON.stringify(parametros));
}


