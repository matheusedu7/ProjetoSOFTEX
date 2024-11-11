# Documentação do Projeto - Sistema de Checklist e Geração de Contratos para Empresa Construtora

---

## Visão Geral

Este projeto tem como objetivo criar um sistema de checklist automatizado para auxiliar uma construtora na organização e formalização de contratos de venda de imóveis. Ele orienta o usuário a seguir um conjunto de passos, garantindo que todas as verificações necessárias sejam feitas antes da criação de um contrato formal. Ao final do checklist, o sistema gera automaticamente um contrato com as propostas de compra aceitas, restando apenas a assinatura dos envolvidos.

---

## Funcionalidades

### 1. **Checklist de Verificação**

- **Descrição**: O sistema apresenta um checklist de tarefas que devem ser concluídas para garantir que todos os dados e condições estão corretos antes da assinatura do contrato.
- **Objetivo**: Orientar o usuário por cada etapa crítica do processo de verificação, evitando erros ou omissões antes da formalização da venda.
- **Tarefas do Checklist**:
  - Revisão dos dados do comprador e do vendedor.
  - Verificação das condições de pagamento.
  - Confirmação da disponibilidade e status do imóvel.
  - Conferência dos documentos necessários para o contrato.

### 2. **Geração de Contrato com Base nas Propostas Aceitas**

- **Descrição**: Após a conclusão do checklist, o sistema compila todas as propostas de compra aceitas em um contrato de venda detalhado.
- **Objetivo**: Criar um documento de contrato contendo as informações completas das partes envolvidas e das condições acordadas, pronto para ser assinado.
- **Elementos do Contrato**:
  - Dados do comprador e do vendedor.
  - Descrição do imóvel (localização, características, etc.).
  - Valor da venda e condições de pagamento (ex.: financiamento, entrada, parcelas).
  - Termos e condições específicos de cada proposta aceita.

### 3. **Exportação e Salvamento do Contrato**

- **Descrição**: O sistema gera e salva o contrato em um formato adequado (ex.: PDF ou texto), permitindo que ele seja impresso ou digitalmente assinado.
- **Objetivo**: Facilitar o armazenamento e a assinatura do contrato final, oferecendo uma versão consolidada e formatada de todas as propostas aceitas.
- **Estrutura do Documento Exportado**:
  - Cabeçalho com data e identificação do contrato.
  - Listagem das propostas aceitas, com seus detalhes específicos.
  - Campos para assinatura do comprador e do vendedor ao final do documento.

---

## Fluxo de Operação

1. **Início do Checklist**:
   - O usuário inicia o checklist e é guiado através de cada passo necessário, concluindo uma tarefa por vez.

2. **Marcações de Conclusão**:
   - Após cada tarefa concluída, o usuário pode marcar o passo como “OK”, sinalizando que a etapa foi verificada e aprovada.

3. **Geração do Contrato**:
   - Ao concluir todos os passos, o sistema gera automaticamente o contrato, consolidando as informações das propostas aceitas e formatando o documento para assinatura.

4. **Exportação**:
   - O contrato é salvo e disponibilizado para download ou impressão, facilitando a assinatura das partes envolvidas.

---

## Regras de Negócio

1. **Somente Propostas Aceitas**: Apenas as propostas que foram previamente aceitas pelo vendedor podem ser incluídas no contrato final.
2. **Checklist Completo para Geração do Contrato**: A geração do contrato só é permitida após a conclusão de todos os passos do checklist.
3. **Controle de Validade do Imóvel**: Imóveis com status de “vendido” ou “indisponível” não devem aparecer para novas propostas.
4. **Personalização de Condições**: Cada contrato deve refletir as condições específicas acordadas entre comprador e vendedor.

---

## Casos de Uso

- **Caso 1**: Usuário executa o checklist e cria um contrato para um imóvel.
  - **Fluxo**: Usuário preenche cada etapa do checklist, ao final, o sistema gera o contrato com os dados inseridos.
  
- **Caso 2**: Um comprador faz uma proposta e o sistema adiciona a proposta aceita ao contrato.
  - **Fluxo**: O sistema verifica a proposta, insere os dados do comprador e, caso aceite, armazena no contrato.
  
---

## Requisitos do Projeto

1. **Checklist Dinâmico**: As etapas do checklist devem ser editáveis para permitir ajustes conforme as necessidades da construtora.
2. **Geração de Documento**: O contrato deve ser gerado em um formato amplamente aceito (PDF ou DOCX).
3. **Interface de Usuário**: Interface intuitiva que orienta o usuário através de cada etapa.
4. **Armazenamento Seguro de Dados**: Propostas e contratos devem ser armazenados com segurança para evitar perda de dados.

---

## Considerações Finais

Este projeto fornece uma solução prática e automatizada para a criação de contratos de venda de imóveis, reduzindo o tempo de formalização e evitando erros humanos. Ele permite à construtora um controle eficiente das propostas aceitas e das condições de venda, organizando o processo até o momento da assinatura final.

--- 

## Autores
### Matheus Eduardo Morais de Faria
### Khyra de Oliveira
### Filipe de Barros
### Matheus Chagas
### Eudes Tiné

Este projeto foi idealizado para facilitar o gerenciamento e formalização de contratos de uma empresa construtora, promovendo um processo mais seguro e eficiente.
