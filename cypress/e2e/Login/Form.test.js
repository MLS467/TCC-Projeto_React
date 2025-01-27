
/**
 * File: Form.test.js
 */

// import mocked data from Mock/mocked.user.json
import mock from "../../Mock/mocked.user.json"

/**
 * @description Test the form data flow
 * @returns {void} Nothing
 */
describe('Data flow test', () => {

    /**
     * @description Clear form fields
     * @returns {void} Nothing
     * clear fields of the form
     */
    const clearForm = () => {
        cy.get('input[name=name]').clear();
        cy.get('input[name=cpf]').clear();
        cy.get('input[name=place_of_birth]').clear();
        cy.get('input[name=email]').clear();
        cy.get('input[name=phone]').clear();
        cy.get('input[name=cep]').clear();
        cy.get('input[name=city]').clear();
        cy.get('input[name=neighborhood]').clear();
        cy.get('input[name=street]').clear();
        cy.get('input[name=block]').clear();
        cy.get('input[name=apartment]').clear();
    }

    /**
     * path to the form and to add data fields
     * - visit the page
     * - click on the login button
     * - fill the form fields
     * - submit the form
     * - clear the form fields
     * - repeat the process for each data in the mock
     * @returns {void} Nothing
     */
    it('path to the form and to add data fields', () => {
        cy.visit('/');
        cy.get('#Login').should('be.visible').click();

        cy.get('input[name=email]').type("teste@atendente.com");
        cy.get('input[name=password]').type(12345678);

        cy.get('button[type="submit"]').click();

        cy.url().should('include', '/form_patient');

        mock.data.forEach((data) => {
            data.name ? cy.get('input[name=name]').type(data.name) : null;
            data.birth ? cy.get('input[name=birth]').type(data.birth) : null;
            data.cpf ? cy.get('input[name=cpf]').type(data.cpf) : null;
            data.place_of_birth ? cy.get('input[name=place_of_birth]').type(data.place_of_birth) : null;
            data.sex ? cy.get('select[name=sex]').select(data.sex) : null;
            data.email ? cy.get('input[name=email]').type(data.email) : null;
            data.phone ? cy.get('input[name=phone]').type(data.phone) : null;
            data.cep ? cy.get('input[name=cep]').type(data.cep) : null;
            data.city ? cy.get('input[name=city]').type(data.city) : null;
            data.neighborhood ? cy.get('input[name=neighborhood]').type(data.neighborhood) : null;
            data.street ? cy.get('input[name=street]').type(data.street) : null;
            data.block ? cy.get('input[name=block]').type(data.block) : null;
            data.apartment ? cy.get('input[name=apartment]').type(data.apartment) : null;

            cy.get('button[type="submit"]').click();
            cy.wait(10000);
            clearForm();
            cy.wait(10000);
        });

    });
});
