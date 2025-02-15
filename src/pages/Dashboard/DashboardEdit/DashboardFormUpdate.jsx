import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DashboardEditContext } from "../../../Context/DashboardContext/DashboardEditContext";
import { Container, Form, Input, Button, Label, DetailRow, DetailsContainer, Header, Badge } from './DashboardFormUpdate.style';

const DashboardFormUpdate = () => {
  const { id, tipo } = useParams();
  const { EditUser, data, updateUser, formData, handleInputChange, handleSubmit } = useContext(DashboardEditContext);

  if (!data || !data.user) {
    return <h1>Carregando...</h1>;
  }


  return (
    <Container>
      <Header>Editar Dados do Médico</Header>
      <Badge active={data.active}>Status: {data.active ? 'Ativo' : 'Inativo'}</Badge>

      <Form onSubmit={(e) => handleSubmit(e, id, tipo)}>
        <DetailsContainer>
          <DetailRow>
            <Label htmlFor="name">Nome:</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </DetailRow>

          <DetailRow>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </DetailRow>

          <DetailRow>
            <Label htmlFor="cpf">Cpf:</Label>
            <Input
              type="text"
              id="cpf"
              name="cpf"
              value={formData.cpf}
              onChange={handleInputChange}
            />
          </DetailRow>

          <DetailRow>
            <Label htmlFor="sex">Sexo:</Label>
            <Input
              type="text"
              id="sex"
              name="sex"
              value={formData.sex}
              onChange={handleInputChange}
            />
          </DetailRow>

          <DetailRow>
            <Label htmlFor="birth">Data de nascimento:</Label>
            <Input
              type="date"
              id="birth"
              name="birth"
              onChange={handleInputChange}
            />
          </DetailRow>

          <DetailRow>
            <Label htmlFor="password">Senha:</Label>
            <Input
              type="text"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </DetailRow>

          <DetailRow>
            <Label htmlFor="phone">Telefone:</Label>
            <Input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </DetailRow>

          <DetailRow>
            <Label htmlFor="age">Idade:</Label>
            <Input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
          </DetailRow>

          {
            tipo === 'nurse' && (
              <>
                <DetailRow>
                  <Label htmlFor="coren">Coren:</Label>
                  <Input
                    type="text"
                    id="coren"
                    name="coren"
                    value={formData.coren}
                    onChange={handleInputChange}
                  />
                </DetailRow>
              </>
            )
          }

          {
            tipo === 'doctor' && (
              <DetailRow>
                <Label htmlFor="crm">CRM:</Label>
                <Input
                  type="text"
                  id="crm"
                  name="crm"
                  value={formData.crm}
                  onChange={handleInputChange}
                />
              </DetailRow>
            )
          }

          {
            tipo === 'doctor' || tipo === 'nurse' && (
              <>

                <DetailRow>
                  <Label htmlFor="specialty">Especialidade:</Label>
                  <Input
                    type="text"
                    id="specialty"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleInputChange}
                  />
                </DetailRow>
              </>
            )

          }


          <DetailRow>
            <Label htmlFor="city">Cidade:</Label>
            <Input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </DetailRow>

          <DetailRow>
            <Label htmlFor="street">Rua:</Label>
            <Input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleInputChange}
            />
          </DetailRow>

          <DetailRow>
            <Label htmlFor="neighborhood">Bairro:</Label>
            <Input
              type="text"
              id="neighborhood"
              name="neighborhood"
              value={formData.neighborhood}
              onChange={handleInputChange}
            />
          </DetailRow>

          <DetailRow>
            <Label htmlFor="apartment">Apartamento:</Label>
            <Input
              type="text"
              id="apartment"
              name="apartment"
              value={formData.apartment}
              onChange={handleInputChange}
            />
          </DetailRow>

          <Button type="submit">Atualizar</Button>
        </DetailsContainer>
      </Form>
    </Container>
  );
};

export default DashboardFormUpdate;
