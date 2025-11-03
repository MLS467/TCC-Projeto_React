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
import { DashboardDoctorContext } from "@/Context/DashboardContext/DashboardDoctorContext/insert/context";
import { useContext } from "react";

const DoctorForm = () => {
  const {
    formData,
    handleInputChange,
    handleSubmit,
    isModalVisible,
    handleCancel,
    loading,
    photoFile,
  } = useContext(DashboardDoctorContext);

  return (
    <Modal onClose={() => handleCancel()} visible={isModalVisible}>
      <FormContainer>
        <FormHeader>
          <UserIcon>👨‍⚕️</UserIcon>
          <HeaderContent>
            <FormTitle>Cadastrar Médico</FormTitle>
            <FormSubtitle>
              Preencha os dados do novo médico do pronto socorro
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
                <Label>Gênero</Label>
                <Select
                  name="sex"
                  value={formData.sex}
                  onChange={handleInputChange}
                >
                  <option value="">Selecione o gênero</option>
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
              <SectionIcon>👨‍⚕️</SectionIcon>
              <SectionTitle>Informações Profissionais</SectionTitle>
            </SectionHeader>
            <FormGrid>
              <InputGroup>
                <Label>CRM</Label>
                <Input
                  type="text"
                  name="crm"
                  value={formData.crm}
                  onChange={handleInputChange}
                  placeholder="Digite o CRM"
                />
              </InputGroup>

              <InputGroup>
                <Label>Especialidade</Label>
                <Input
                  type="text"
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleInputChange}
                  placeholder="Digite a especialidade"
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
            <div>
              <Label>Foto do Médico</Label>
              <FileUploadArea
                as="label"
                htmlFor="photo-upload"
                style={{ cursor: "pointer" }}
              >
                <UploadIcon>�</UploadIcon>
                <UploadText>
                  {photoFile ? photoFile.name : "Clique para escolher arquivo"}
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
          </FileSection>

          {/* Status */}
          <StatusGroup>
            <Label>Ativo</Label>
            <Select
              name="active"
              value={formData.active}
              onChange={handleInputChange}
            >
              <option value={1}>Sim</option>
              <option value={0}>Não</option>
            </Select>
          </StatusGroup>

          {/* Botões */}
          <ButtonContainer>
            <CancelButton type="button" onClick={handleCancel}>
              Cancelar
            </CancelButton>
            <SaveButton type="submit" disabled={loading}>
              {loading ? "Salvando..." : "Salvar Médico"}
            </SaveButton>
          </ButtonContainer>
        </form>
      </FormContainer>
    </Modal>
  );
};

export default DoctorForm;
