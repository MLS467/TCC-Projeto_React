# ListContext - Documentação

## Descrição

O `ListContext` é um contexto React centralizado que gerencia operações de lista de pacientes, incluindo carregamento e exclusão. Foi criado para evitar duplicação de código entre diferentes telas que lidam com listas de pacientes.

## Estrutura de Arquivos

```
src/Context/ListContext/
├── context.js          # Criação do contexto
├── ListProvider.jsx    # Provider com toda a lógica
└── index.js           # Exports centralizados
```

## Como Usar

### 1. Provider já configurado

O `ListProvider` já está configurado no `main.jsx` e envolve toda a aplicação.

### 2. Em uma tela de lista de pacientes

```jsx
import { useContext, useEffect } from "react";
import { ListContext } from "@/Context/ListContext";

const MinhaTelaLista = () => {
  // Desestruturar as funções e estado do contexto
  const {
    data, // Lista atual de pacientes
    isLoading, // Estado de carregamento
    fetchPatients, // Função para carregar pacientes
    deletePatient, // Função para deletar pacientes
  } = useContext(ListContext);

  // Definir endpoints específicos da sua tela
  const ENDPOINTS = {
    PATIENTS: "sua-url-para-buscar-pacientes",
    USER: "sua-url-para-deletar-pacientes",
  };

  // Carregar dados ao montar o componente
  useEffect(() => {
    fetchPatients(ENDPOINTS.PATIENTS);
  }, [fetchPatients]);

  // Função local para deletar com endpoint específico
  const handleDeletePatient = async (id) => {
    return await deletePatient(id, ENDPOINTS.USER);
  };

  // Renderizar componente
  return (
    <div>
      {isLoading ? (
        <SpinnerScreen />
      ) : (
        <MeuComponenteLista data={data} onDelete={handleDeletePatient} />
      )}
    </div>
  );
};
```

## Funções Disponíveis

### fetchPatients(endpoint)

**Descrição**: Carrega lista de pacientes de um endpoint específico
**Parâmetros**:

- `endpoint` (string): URL completa do endpoint para buscar pacientes
  **Retorna**: Promise com resultado da operação

**Exemplo**:

```jsx
const result = await fetchPatients("http://api.exemplo.com/patients/flag");
```

### deletePatient(id, deleteEndpoint)

**Descrição**: Deleta um paciente específico e atualiza a lista local
**Parâmetros**:

- `id` (string|number): ID do paciente a ser deletado
- `deleteEndpoint` (string): URL base para deleção (será concatenado com /{id})
  **Retorna**: Promise com resultado da operação

**Exemplo**:

```jsx
const result = await deletePatient(123, "http://api.exemplo.com/users");
// Fará requisição DELETE para: http://api.exemplo.com/users/123
```

### clearData()

**Descrição**: Limpa a lista de dados atual
**Uso**: Útil quando navegar entre telas diferentes

### refreshData(endpoint)

**Descrição**: Recarrega a lista atual
**Parâmetros**:

- `endpoint` (string): URL para recarregar os dados

## Estado Disponível

### data

**Tipo**: Array
**Descrição**: Lista atual de pacientes carregados

### isLoading

**Tipo**: Boolean
**Descrição**: Indica se está carregando dados

## Logs e Debug

O contexto inclui logs detalhados para facilitar o debug:

- Status de autenticação
- Parâmetros de requisições
- Respostas da API
- Erros e sucessos

## Tratamento de Erros

O contexto automaticamente:

- Valida IDs antes de deletar
- Verifica se endpoints foram fornecidos
- Mostra toasts de erro/sucesso
- Retorna objetos padronizados com `{ success: boolean, error?: string }`

## Telas que Usam o Contexto

1. **NursePatientList** - Lista de pacientes para enfermagem
2. **MedicalPatientList** - Lista de pacientes para área médica

## Vantagens

1. **Reutilização**: Mesma lógica para diferentes telas
2. **Consistência**: Comportamento padronizado
3. **Manutenibilidade**: Alterações centralizadas
4. **Debug**: Logs detalhados em um só lugar
5. **Performance**: Estado compartilhado entre componentes
