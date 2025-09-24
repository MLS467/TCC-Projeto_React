import Modal from "@/components/common/Modal";
import { useState } from "react";
import {
  FormContainer,
  FormHeader,
  UserIcon,
  HeaderContent,
  FormTitle,
  FormSubtitle,
  SectionContainer,
  SectionHeader,
  SectionIcon,
  SectionTitle,
  FormGrid,
  InputGroup,
  Label,
  Input,
  Select,
  FileSection,
  FileUploadArea,
  UploadIcon,
  UploadText,
  StatusGroup,
  ButtonContainer,
  CancelButton,
  SaveButton,
} from "./style";

const Test = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    telefone: "",
    cpf: "",
    sexo: "",
    dataNascimento: "",
    naturalidade: "",
    cidadeAtual: "",
    bairro: "",
    rua: "",
    bloco: "",
    apartamento: "",
    foto: "",
    status: "Ativo",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal onClose={() => setIsModalVisible(false)} visible={isModalVisible}>
      <FormContainer>
        <FormHeader>
          <UserIcon>👤</UserIcon>
          <HeaderContent>
            <FormTitle>Cadastrar Atendente</FormTitle>
            <FormSubtitle>
              Preencha os dados do novo atendente do pronto socorro
            </FormSubtitle>
          </HeaderContent>
        </FormHeader>

        <form onSubmit={handleSubmit}>
          {/* Seção Informações Pessoais */}
          <SectionContainer>
            <SectionHeader>
              <SectionIcon>👤</SectionIcon>
              <SectionTitle>Informações Pessoais</SectionTitle>
            </SectionHeader>
            <FormGrid>
              <InputGroup>
                <Label>Nome Completo</Label>
                <Input
                  type="text"
                  name="nomeCompleto"
                  value={formData.nomeCompleto}
                  onChange={handleInputChange}
                  placeholder="Digite o nome completo"
                />
              </InputGroup>

              <InputGroup>
                <Label>E-mail</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Digite o e-mail"
                />
              </InputGroup>

              <InputGroup>
                <Label>Telefone</Label>
                <Input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  placeholder="(00) 00000-0000"
                />
              </InputGroup>

              <InputGroup>
                <Label>CPF</Label>
                <Input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleInputChange}
                  placeholder="000.000.000-00"
                />
              </InputGroup>

              <InputGroup>
                <Label>Sexo</Label>
                <Select
                  name="sexo"
                  value={formData.sexo}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione o sexo</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                  <option value="outro">Outro</option>
                </Select>
              </InputGroup>

              <InputGroup>
                <Label>Data de Nascimento</Label>
                <Input
                  type="date"
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleInputChange}
                  placeholder="dd/mm/aaaa"
                />
              </InputGroup>
            </FormGrid>
          </SectionContainer>

          {/* Seção Endereço */}
          <SectionContainer>
            <SectionHeader>
              <SectionIcon>📍</SectionIcon>
              <SectionTitle>Endereço</SectionTitle>
            </SectionHeader>
            <FormGrid>
              <InputGroup>
                <Label>Naturalidade</Label>
                <Input
                  type="text"
                  name="naturalidade"
                  value={formData.naturalidade}
                  onChange={handleInputChange}
                  placeholder="Cidade de nascimento"
                />
              </InputGroup>

              <InputGroup>
                <Label>Cidade Atual</Label>
                <Input
                  type="text"
                  name="cidadeAtual"
                  value={formData.cidadeAtual}
                  onChange={handleInputChange}
                  placeholder="Cidade atual"
                />
              </InputGroup>

              <InputGroup>
                <Label>Bairro</Label>
                <Input
                  type="text"
                  name="bairro"
                  value={formData.bairro}
                  onChange={handleInputChange}
                  placeholder="Nome do bairro"
                />
              </InputGroup>

              <InputGroup>
                <Label>Rua</Label>
                <Input
                  type="text"
                  name="rua"
                  value={formData.rua}
                  onChange={handleInputChange}
                  placeholder="Nome da rua e número"
                />
              </InputGroup>

              <InputGroup>
                <Label>Bloco</Label>
                <Input
                  type="text"
                  name="bloco"
                  value={formData.bloco}
                  onChange={handleInputChange}
                  placeholder="Bloco (se houver)"
                />
              </InputGroup>

              <InputGroup>
                <Label>Apartamento</Label>
                <Input
                  type="text"
                  name="apartamento"
                  value={formData.apartamento}
                  onChange={handleInputChange}
                  placeholder="Número do apartamento"
                />
              </InputGroup>
            </FormGrid>
          </SectionContainer>

          {/* Seção Foto e Status */}
          <SectionContainer>
            <SectionHeader>
              <SectionIcon>📷</SectionIcon>
              <SectionTitle>Foto e Status</SectionTitle>
            </SectionHeader>
            <FileSection>
              <div>
                <Label>Foto do Atendente</Label>
                <FileUploadArea>
                  <UploadIcon>📤</UploadIcon>
                  <UploadText>Escolher arquivo</UploadText>
                </FileUploadArea>
              </div>
              <StatusGroup>
                <Label>Status</Label>
                <Select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                >
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                </Select>
              </StatusGroup>
            </FileSection>
          </SectionContainer>

          <ButtonContainer>
            <CancelButton type="button" onClick={handleCancel}>
              Cancelar
            </CancelButton>
            <SaveButton type="submit">Salvar Atendente</SaveButton>
          </ButtonContainer>
        </form>
      </FormContainer>
    </Modal>
  );
};

export default Test;
