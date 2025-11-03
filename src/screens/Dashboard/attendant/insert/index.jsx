import Modal from "@/components/common/Modal";

import {
  FormContainer,
  FormHeader,
  UserIcon,
  HeaderContent,
  FormTitle,
  FormSubtitle,
  SectionContainer,
  SectionHeader,
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
import { DashboardAttendantContext } from "@/Context/DashboardContext/DashboardAttendantContext/insert/context";
import { useContext } from "react";

const AttendantForm = () => {
  const {
    formData,
    handleInputChange,
    handleSubmit,
    isModalVisible,
    handleCancel,
    loading,
    photoFile,
  } = useContext(DashboardAttendantContext);

  return (
    <Modal onClose={() => handleCancel()} visible={isModalVisible}>
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
              <SectionTitle>Informações Pessoais</SectionTitle>
            </SectionHeader>
            <FormGrid>
              <InputGroup>
                <Label>Nome Completo</Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
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
                  name="phone"
                  value={formData.phone}
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
                  name="sex"
                  value={formData.sex}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione o sexo</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                </Select>
              </InputGroup>

              <InputGroup>
                <Label>Data de Nascimento</Label>
                <Input
                  type="date"
                  name="birth"
                  value={formData.birth}
                  onChange={handleInputChange}
                  placeholder="dd/mm/aaaa"
                />
              </InputGroup>
            </FormGrid>
          </SectionContainer>

          {/* Seção Endereço */}
          <SectionContainer>
            <SectionHeader>
              <SectionTitle>Endereço</SectionTitle>
            </SectionHeader>
            <FormGrid>
              <InputGroup>
                <Label>Naturalidade</Label>
                <Input
                  type="text"
                  name="place_of_birth"
                  value={formData.place_of_birth}
                  onChange={handleInputChange}
                  placeholder="Cidade de nascimento"
                />
              </InputGroup>

              <InputGroup>
                <Label>Cidade Atual</Label>
                <Input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Cidade atual"
                />
              </InputGroup>

              <InputGroup>
                <Label>Bairro</Label>
                <Input
                  type="text"
                  name="neighborhood"
                  value={formData.neighborhood}
                  onChange={handleInputChange}
                  placeholder="Nome do bairro"
                />
              </InputGroup>

              <InputGroup>
                <Label>Rua</Label>
                <Input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                  placeholder="Nome da rua e número"
                />
              </InputGroup>

              <InputGroup>
                <Label>Bloco</Label>
                <Input
                  type="text"
                  name="block"
                  value={formData.block}
                  onChange={handleInputChange}
                  placeholder="Bloco (se houver)"
                />
              </InputGroup>

              <InputGroup>
                <Label>Apartamento</Label>
                <Input
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  placeholder="Número do apartamento"
                />
              </InputGroup>
            </FormGrid>
          </SectionContainer>

          {/* Seção Foto e Status */}
          <SectionContainer>
            <SectionHeader>
              <SectionTitle>Foto e Status</SectionTitle>
            </SectionHeader>
            <FileSection>
              <div>
                <Label>Foto do Atendente</Label>
                <FileUploadArea
                  as="label"
                  htmlFor="photo-upload"
                  style={{ cursor: "pointer" }}
                >
                  <UploadIcon>📤</UploadIcon>
                  <UploadText>
                    {photoFile
                      ? photoFile.name
                      : "Clique para escolher arquivo"}
                  </UploadText>
                  <Input
                    id="photo-upload"
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={handleInputChange}
                    style={{ display: "none" }}
                  />
                </FileUploadArea>
              </div>
              <StatusGroup>
                <Label>Ativo</Label>
                <Select
                  name="active"
                  value={formData.active}
                  onChange={handleInputChange}
                >
                  <option value="1">Sim</option>
                  <option value="0">Não</option>
                </Select>
              </StatusGroup>
            </FileSection>
          </SectionContainer>

          <ButtonContainer>
            <CancelButton type="button" onClick={handleCancel}>
              Cancelar
            </CancelButton>
            <SaveButton onClick={handleSubmit} disabled={loading}>
              {loading ? "Salvando..." : "Salvar Atendente"}
            </SaveButton>
          </ButtonContainer>
        </form>
      </FormContainer>
    </Modal>
  );
};

export default AttendantForm;
