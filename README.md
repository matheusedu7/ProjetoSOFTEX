# ProjetoSOFTEX

# Sistema de Gestão de Propostas e Contratos - Empresa Construtora

Este sistema de gerenciamento de propostas e contratos permite à construtora gerenciar todo o ciclo de venda de imóveis, desde o cadastro de clientes e imóveis até a criação de propostas, formalização de contratos e acompanhamento de pagamentos. 

---

## Tabela de Conteúdos

- [Visão Geral](#visão-geral)
- [Entidades e Atributos](#entidades-e-atributos)
  - [Cliente](#cliente)
  - [Imóvel](#imóvel)
  - [Proposta](#proposta)
  - [Contrato](#contrato)
  - [Pagamento](#pagamento)
- [Relacionamentos](#relacionamentos)
- [Regras de Negócio](#regras-de-negócio)
- [Fluxo de Operação](#fluxo-de-operação)
- [Consultas Úteis](#consultas-úteis)
- [Considerações Finais](#considerações-finais)

---

## Visão Geral

O sistema foi desenvolvido para auxiliar a empresa construtora no acompanhamento de vendas de imóveis, registrando as informações de clientes, imóveis, propostas de compra, contratos e pagamentos. Ele permite uma visão completa do status de cada negociação e facilita a administração de contratos e propostas.

---

## Entidades e Atributos

### Cliente

Armazena informações sobre os clientes, que podem ser compradores ou vendedores de imóveis.

- **ID Cliente**: Identificador único.
- **Nome**: Nome completo.
- **CPF/CNPJ**: Documento do cliente (CPF ou CNPJ).
- **Endereço**: Endereço de contato.
- **Telefone**: Número de telefone.
- **Email**: Endereço de e-mail.
- **Tipo**: Classificação (comprador ou vendedor).

### Imóvel

Representa os imóveis disponíveis para venda.

- **ID Imóvel**: Identificador único.
- **Endereço**: Localização do imóvel.
- **Tipo**: Tipo do imóvel (ex.: apartamento, casa).
- **Área**: Área em metros quadrados.
- **Quantidade de Quartos**: Número de quartos.
- **Quantidade de Banheiros**: Número de banheiros.
- **Valor de Venda**: Valor de venda inicial.
- **Status**: Estado atual do imóvel (disponível, vendido, etc.).

### Proposta

Registra propostas de compra feitas por compradores para os imóveis.

- **ID Proposta**: Identificador único.
- **ID Comprador**: Identificador do cliente comprador (FK).
- **ID Vendedor**: Identificador do cliente vendedor (FK).
- **ID Imóvel**: Identificador do imóvel (FK).
- **Valor Oferecido**: Valor ofertado pelo comprador.
- **Data da Proposta**: Data de criação da proposta.
- **Forma de Pagamento**: Modo de pagamento (financiamento, à vista).
- **Sinal de Entrada**: Valor da entrada, se aplicável.
- **Parcelas**: Detalhes de parcelamento.
- **Condições da Proposta**: Observações específicas.
- **Prazo para Aceite**: Data limite para resposta do vendedor.
- **Status da Proposta**: Estado da proposta (pendente, aceita, rejeitada).
- **Data de Aceite/Rejeição**: Data de resposta do vendedor.

### Contrato

Formaliza propostas aceitas, transformando-as em contratos de venda.

- **ID Contrato**: Identificador único.
- **ID Proposta**: Identificador da proposta associada (FK).
- **Data de Assinatura**: Data de assinatura.
- **Valor Final**: Valor final acordado.
- **Termos e Condições**: Condições e cláusulas do contrato.
- **Status do Contrato**: Estado atual (ativo, cancelado).

### Pagamento

Registra os pagamentos feitos pelo comprador como parte do contrato.

- **ID Pagamento**: Identificador único.
- **ID Contrato**: Identificador do contrato associado (FK).
- **Data do Pagamento**: Data de pagamento.
- **Valor do Pagamento**: Quantia paga.
- **Método de Pagamento**: Forma de pagamento (ex.: boleto).
- **Status do Pagamento**: Estado do pagamento (pago, pendente).

---

## Relacionamentos

1. **Cliente - Proposta**: Um cliente pode estar em várias propostas, como comprador ou vendedor.  
   Relacionamento: **1:N**.

2. **Imóvel - Proposta**: Um imóvel pode receber múltiplas propostas.  
   Relacionamento: **1:N**.

3. **Proposta - Contrato**: Uma proposta aceita se torna um contrato.  
   Relacionamento: **1:1**.

4. **Contrato - Pagamento**: Um contrato pode ter vários pagamentos, em caso de parcelamento.  
   Relacionamento: **1:N**.

---

## Regras de Negócio

1. **Exclusividade de Imóvel**: Um imóvel vendido ou em negociação ativa não pode receber novas propostas.
2. **Prazo de Aceite da Proposta**: Propostas expiram após o prazo limite, passando para o status "vencida".
3. **Conversão de Proposta em Contrato**: Apenas propostas aceitas podem ser transformadas em contratos.
4. **Controle de Pagamentos**: Pagamentos devem ser registrados e o status de pendências precisa ser monitorado.

---

## Fluxo de Operação

1. **Cadastro de Cliente**: Adiciona informações do cliente (comprador ou vendedor).
2. **Cadastro de Imóvel**: Registra os imóveis disponíveis.
3. **Proposta de Compra**: Permite ao comprador fazer uma proposta para o imóvel.
4. **Aceite/Rejeição da Proposta**: O vendedor responde à proposta, que pode ser aceita ou rejeitada.
5. **Formalização de Contrato**: Uma proposta aceita se transforma em contrato.
6. **Registro de Pagamentos**: Monitoramento dos pagamentos de acordo com o contrato.

---

## Consultas Úteis

- Listar todos os imóveis disponíveis para venda.
- Obter todas as propostas pendentes de resposta.
- Listar contratos ativos e seus pagamentos.
- Consultar histórico de pagamentos de um cliente.
- Listar todas as propostas de um imóvel específico.

---

## Considerações Finais

O sistema facilita o gerenciamento de vendas de imóveis, organizando todas as etapas de uma negociação. Ele permite que a construtora acompanhe e registre todas as propostas, contratos e pagamentos, proporcionando transparência e controle sobre o processo de vendas.

--- 

### Contato

Em caso de dúvidas ou sugestões, entre em contato com o time de desenvolvimento da construtora.
