import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DashboardEditContext } from "../../../Context/DashboardContext/DashboardEditContext"
import { DetailRow, DetailsContainer, Header, Label, Value, Badge, CardContainer, DashboardEditContainer, ContainerBtnEdit, ButtonWrapper, Button } from './DashboardEdit.style';
import { FaRegEdit } from "react-icons/fa";
import SpinnerImg from '../../../Components/Spinner/Spinner';

const DashboardEdit = () => {

  const { EditUser, data } = useContext(DashboardEditContext);

  const { id, tipo } = useParams();

  useEffect(() => {
    EditUser(id, tipo);
  }, [id, tipo]);

  if (!data || !data.user) {
    return <SpinnerImg
      $widthSpinner="200px"
      $heightSpinner="200px"
      $alignItems="flex-start"
      $marginTop="100px"
    />;
  }

  return (
    <DashboardEditContainer>
      <CardContainer>
        <Header>{data.user.name}</Header>
        <Badge active={data.active}>Status: {data.active ? 'Ativo' : 'Inativo'}</Badge>

        <DetailsContainer>
          <DetailRow>
            <Label>CRM:</Label>
            <Value>{data.crm}</Value>
          </DetailRow>
          <DetailRow>
            <Label>Especialidade:</Label>
            <Value>{data.specialty}</Value>
          </DetailRow>
          <DetailRow>
            <Label>Idade:</Label>
            <Value>{data.user.age} anos</Value>
          </DetailRow>
          <DetailRow>
            <Label>Email:</Label>
            <Value>{data.user.email}</Value>
          </DetailRow>
          <DetailRow>
            <Label>Telefone:</Label>
            <Value>{data.user.phone}</Value>
          </DetailRow>
          <DetailRow>
            <Label>Cidade:</Label>
            <Value>{data.user.city}</Value>
          </DetailRow>
          <DetailRow>
            <Label>Endereço:</Label>
            <Value>{data.user.street}, {data.user.neighborhood}, {data.user.apartment}</Value>
          </DetailRow>
        </DetailsContainer>

        <ContainerBtnEdit >
          <Link to={`/dashboard/update_funcionario/${tipo}/${id}`} >
            <ButtonWrapper >
              <Button>
                <FaRegEdit className='icon' />
                Editar
              </Button>
            </ButtonWrapper>
          </Link>
        </ContainerBtnEdit>

      </CardContainer>
    </DashboardEditContainer>
  );
}

export default DashboardEdit;
