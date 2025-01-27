describe('Teste Login', () => {

    // Função para realizar o login
    const Login = (email, password, page, message = []) => {
        cy.get('input[name=email]').type(email);
        cy.get('input[name=password]').type(password);

        cy.get('button[type="submit"]').click();

        if (page.length > 0) {

            cy.url().should('include', page);

            cy.wait(2000);

            cy.get('#Logout').should('be.visible').click();
        }

        cy.wait(2000);

        if (Array.isArray(message)) {
            message.forEach((msg) => {
                cy.contains(msg).should('be.visible');
            });
        } else {
            console.error('O parâmetro "message" deve ser um array');
        }
    }

    // Função para realizar o login com campos não preenchidos
    const LoginFildsIncomplete = (email, password, message = []) => {
        if (email.length === 0) {
            cy.get('input[name=email]').clear(email);
            cy.get('input[name=password]').type(password);
        } else {
            cy.get('input[name=email]').type(email);
            cy.get('input[name=password]').clear(password);
        }

        cy.get('button[type="submit"]').click();

        message.forEach((msg) => {
            cy.contains(msg).should('be.visible');
        });
    }

    /**
     *  Teste de acesso a página privada
     * - Acessar a página privada sem estar logado
     * - Verificar se a página foi redirecionada para a página de login
     * - Repetir o processo para as outras páginas privadas
     * - Dashboard
     * - Pacientes
     * - Triagem
     * - Formulário de consulta
     * - Formulário de triagem
     * - Formulário de atendimento
     */
    it('trying to access private page', () => {
        cy.visit('/PatientList');
        cy.url().should('include', '/login');

        cy.wait(2000);

        cy.visit('/triageList');
        cy.url().should('include', '/login');

        cy.wait(2000);

        cy.visit('/form_patient');
        cy.url().should('include', '/login');
    });

    /**
    * Teste de login com sucesso
    *
    * - Acessar a página de login
    * - Preencher os campos de email e senha
    * - Clicar no botão de login
    * - Verificar se a página foi redirecionada para a página correta
    * - Clicar no botão de logout
    * - Verificar se a mensagem de logout foi exibida
    */
    it('should do login with error', () => {
        cy.visit('/login');
        Login('teste@teste', 'password', '', ['Email ou senha inválidos']);

    });

    /**
    * Teste de login com erro
    * - Acessar a página de login
    * - Preencher os campos de email e senha
    * - Clicar no botão de login
    * - Verificar se a mensagem de erro foi exibida
    */
    it('filds not complete', () => {
        cy.visit('/login');

        const mensagem = ['Senha é obrigatória', 'Senha deve ter no mínimo 6 caracteres'];

        LoginFildsIncomplete('teste@teste', '', mensagem);

        const mensagem2 = ['Email é obrigatório'];

        LoginFildsIncomplete('', 'password', mensagem2);

    });


    /**
     * Teste de redirecionamento
     * - Acessar a página de login
     * - Preencher os campos de email e senha
     * - Clicar no botão de login
     * - Verificar se a página foi redirecionada para a página correta
     * - Clicar no botão de logout
     * - Verificar se a mensagem de logout foi exibida
     * - Repetir o processo para os outros tipos de usuário
     * - Atendente
     * - Enfermeiro
     * - Médico
     */
    it('should go to page correct', () => {
        cy.visit('/login');

        const message = ['Logout realizado com sucesso'];

        Login('teste@admin.com', 'password', '/dashboard', message);

        Login('teste@atendente.com', 12345678, '/form_patient', message);

        Login('teste@enfe.com', 12345678, '/PatientList', message);

        Login('teste@doutora.com', 12345678, '/triageList', message);
    });
});
