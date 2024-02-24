// Função para enviar e-mail
function enviarEmail() {
    var emailAdmin = "admin@email.com";
    var assunto = "Notificação de Novo Formulário Preenchido";
    var corpoEmail = "Um novo formulário foi preenchido";

    var parametros = {
        "subject": assunto,
        "templateId": "template_padrao",
        "model": {
            "mensagem": corpoEmail
        },
        "to": [emailAdmin]
    };

    var emailService = fluigAPI.getAuthorizeService().getEndpoint("email");
    var response = emailService.post(JSON.stringify(parametros));
}
