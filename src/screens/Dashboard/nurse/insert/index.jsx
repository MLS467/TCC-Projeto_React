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
import { DashboardNurseContext } from "@/Context/DashboardContext/DashboardNurseContext/insert/context";
import { useContext } from "react";

const NurseForm = () => {
  const {
    formData,
    handleInputChange,
    handleSubmit,
    isModalVisible,
    handleCancel,
    loading,
  } = useContext(DashboardNurseContext);

  return (
    <Modal onClose={() => handleCancel()} visible={isModalVisible}>
      <FormContainer>
        <FormHeader>
          <UserIcon>👩‍⚕️</UserIcon>
          <HeaderContent>
            <FormTitle>Cadastrar Enfermeiro(a)</FormTitle>
            <FormSubtitle>
              Preencha os dados do novo enfermeiro(a) do pronto socorro
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
                <Label>Data de Nascimento</Label>
                <Input
                  type="date"
                  name="birth"
                  value={formData.birth}
                  onChange={handleInputChange}
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
                <Label>Local de Nascimento</Label>
                <Input
                  type="text"
                  name="place_of_birth"
                  value={formData.place_of_birth}
                  onChange={handleInputChange}
                  placeholder="Digite o local de nascimento"
                />
              </InputGroup>
            </FormGrid>
          </SectionContainer>

          {/* Seção Informações Profissionais */}
          <SectionContainer>
            <SectionHeader>
              <SectionIcon>👩‍⚕️</SectionIcon>
              <SectionTitle>Informações Profissionais</SectionTitle>
            </SectionHeader>
            <FormGrid>
              <InputGroup>
                <Label>COREN</Label>
                <Input
                  type="text"
                  name="coren"
                  value={formData.coren}
                  onChange={handleInputChange}
                  placeholder="Digite o COREN"
                />
              </InputGroup>

              <InputGroup>
                <Label>Especialização</Label>
                <Input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  placeholder="Digite a especialização"
                />
              </InputGroup>

              <InputGroup>
                <Label>Turno de Trabalho</Label>
                <Select
                  name="work_shift"
                  value={formData.work_shift}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione o turno</option>
                  <option value="morning">Manhã</option>
                  <option value="afternoon">Tarde</option>
                  <option value="night">Noite</option>
                  <option value="full_time">Integral</option>
                </Select>
              </InputGroup>

              <InputGroup>
                <Label>Nível</Label>
                <Select
                  name="level"
                  value={formData.level}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione o nível</option>
                  <option value="technician">Técnico</option>
                  <option value="bachelor">Bacharel</option>
                  <option value="specialist">Especialista</option>
                </Select>
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
                <Label>CEP</Label>
                <Input
                  type="text"
                  name="postal_code"
                  value={formData.postal_code}
                  onChange={handleInputChange}
                  placeholder="00000-000"
                />
              </InputGroup>

              <InputGroup>
                <Label>Rua</Label>
                <Input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                  placeholder="Digite a rua"
                />
              </InputGroup>

              <InputGroup>
                <Label>Número</Label>
                <Input
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  placeholder="Digite o número"
                />
              </InputGroup>

              <InputGroup>
                <Label>Bairro</Label>
                <Input
                  type="text"
                  name="neighborhood"
                  value={formData.neighborhood}
                  onChange={handleInputChange}
                  placeholder="Digite o bairro"
                />
              </InputGroup>

              <InputGroup>
                <Label>Cidade</Label>
                <Input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Digite a cidade"
                />
              </InputGroup>

              <InputGroup>
                <Label>Estado</Label>
                <Select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione o estado</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </Select>
              </InputGroup>
            </FormGrid>
          </SectionContainer>

          {/* Upload de Foto */}
          <FileSection>
            <SectionHeader>
              <SectionIcon>📷</SectionIcon>
              <SectionTitle>Foto de Perfil</SectionTitle>
            </SectionHeader>
            <FileUploadArea>
              <UploadIcon>📎</UploadIcon>
              <UploadText>
                Clique para selecionar ou arraste uma imagem
              </UploadText>
            </FileUploadArea>
          </FileSection>

          {/* Status */}
          <StatusGroup>
            <Label>Status</Label>
            <Select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            >
              <option value="active">Ativo</option>
              <option value="inactive">Inativo</option>
            </Select>
          </StatusGroup>

          {/* Botões */}
          <ButtonContainer>
            <CancelButton type="button" onClick={handleCancel}>
              Cancelar
            </CancelButton>
            <SaveButton type="submit" disabled={loading}>
              {loading ? "Salvando..." : "Salvar Enfermeiro(a)"}
            </SaveButton>
          </ButtonContainer>
        </form>
      </FormContainer>
    </Modal>
  );
};

export default NurseForm;
