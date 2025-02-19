import React, { useEffect, useState } from 'react';
import NewInput from './NewInput/NewInput';
import { Container, ContainerForm, Option, Select } from './NewInput/NewInput.style';
import FormGlobal from '../../components/FormGlobal/FormGlobal';
import FormRowGlobal from '../../components/FormGlobal/FormRowGlobal';
import FormSectionGlobal from '../../components/FormGlobal/FormSectionGlobal';
import ButtonForm from './NewInput/ButtonForm/ButtonForm';

const Teste = () => {

    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        name: '',
    });

    useEffect(() => {
        setForm(prevForm => ({
            ...prevForm,
            name: `${prevForm.first_name} ${prevForm.last_name}`
        }));
    }, [form.first_name, form.last_name]);

    const handleChanges = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }


    console.log(form);

    return (
        <ContainerForm>
            <form>

                <FormGlobal>
                    <h1>Formulário de primeiro atendimento</h1>
                    <FormRowGlobal>
                        <FormSectionGlobal legends="Dados Pessoais">
                            <NewInput
                                action={handleChanges}
                                placeholder="Digite o nome"
                                required={true}
                                label="Nome"
                                type="text"
                                name="first_name"
                                size="xl"
                            />

                            <NewInput
                                action={handleChanges}
                                placeholder="Digite o Sobrenome"
                                required={true}
                                label="Sobrenome"
                                type="text"
                                name="last_name"
                                size="xl"
                            />

                            <NewInput
                                action={handleChanges}
                                placeholder="Digite o CPF"
                                required={true}
                                label="CPF"
                                type="text"
                                name="cpf"
                                size="m"
                            />
                            <NewInput
                                action={handleChanges}
                                placeholder="Digite a cidade natal"
                                label="Cidade Natal"
                                type="text"
                                name="birth_city"
                                size="l"
                            />

                            <NewInput
                                action={handleChanges}
                                label="Data de nascimento"
                                required={true}
                                type="date"
                                name="birth_date"
                                size="m"
                            />

                            <Container $size="m">
                                <label htmlFor="sexo">Sexo:</label>

                                <Select
                                    onChange={handleChanges}
                                    id="sexo"
                                    name="gender"
                                    defaultValue="null"
                                    style={{
                                        width: "100%",
                                        padding: "10px",
                                        borderRadius: "5px",
                                        border: "1px solid #ccc",
                                        backgroundColor: "transparent",
                                    }}
                                >
                                    <Option value="null" disabled={true}>
                                        Escolher sexo
                                    </Option>
                                    <Option value="male">Masculino</Option>
                                    <Option value="female">Feminino</Option>
                                </Select>
                            </Container>
                        </FormSectionGlobal>
                    </FormRowGlobal>

                    <FormRowGlobal>
                        <FormSectionGlobal legends="Contato">
                            <NewInput
                                action={handleChanges}
                                placeholder="Digite o email"
                                label="Email"
                                type="email"
                                name="email"
                                size="l"
                            />

                            <NewInput
                                action={handleChanges}
                                required={true}
                                placeholder="Digite o número de celular"
                                label="Celular"
                                type="text"
                                name="phone"
                                size="l"
                            />
                        </FormSectionGlobal>
                    </FormRowGlobal>

                    <FormRowGlobal>
                        <FormSectionGlobal legends="Endereço">
                            <NewInput
                                action={handleChanges}
                                required={true}
                                placeholder="Digite o CEP"
                                label="CEP"
                                type="text"
                                name="zip_code"
                                size="m"
                            />
                            <NewInput
                                action={handleChanges}
                                required={true}
                                placeholder="Digite a cidade atual"
                                label="Cidade Atual"
                                type="text"
                                name="current_city"
                                size="m"
                            />
                            <NewInput
                                action={handleChanges}
                                required={true}
                                placeholder="Digite o bairro"
                                label="Bairro"
                                type="text"
                                name="neighborhood"
                                size="l"
                            />
                            <NewInput
                                action={handleChanges}
                                required={true}
                                placeholder="Digite a rua"
                                label="Rua"
                                type="text"
                                name="street"
                                size="l"
                            />
                            <NewInput
                                action={handleChanges}
                                placeholder="Digite o bloco"
                                label="Bloco"
                                type="text"
                                name="block"
                                size="s"
                            />
                            <NewInput
                                action={handleChanges}
                                placeholder="Digite o apto"
                                label="Apt"
                                type="text"
                                name="apartment"
                                size="s"
                            />

                            <div style={{ width: '71%', height: '85px', display: "flex", justifyContent: "flex-end" }}>
                                <div style={{ display: 'inherit', alignItems: 'flex-end', justifyContent: "flex-end", width: '25%', gap: '10px' }}>
                                    <ButtonForm type={'submit'} text="Enviar" />
                                    <ButtonForm type={'reset'} text="Limpar" reset={true} />
                                </div>
                            </div>

                        </FormSectionGlobal>
                    </FormRowGlobal>
                </FormGlobal>
            </form>
        </ContainerForm>

    );
}

export default Teste;
