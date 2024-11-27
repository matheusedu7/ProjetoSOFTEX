use projeto;
create table dados_movel(
  fase_imovel varchar(20) not null,
  nome_empreendimento varchar(50) not null,
  lote_terreno varchar(10) not null,
  area_terreno varchar(10) not null,
  matricula integer not null,
  logradouro varchar(50) not null,
  numero integer not null,
  complemento varchar(50) not null,
  bairro varchar(50) not null,
  cep varchar(9) not null,
  cidade varchar(30) not null,
  estado varchar(2) not null,
  num_casa integer not null);
 
create table docs_modelo( 
id_docs_modelo integer primary key,
boleto_pagto_escritura varchar (50) not null,
boleto_pagto_escritura_itbi varchar (50) not null,
boleto_pagto_escritura_registro varchar (50) not null,
promessa_compra_venda_assinado varchar (50) not null,
promessa_compra_venda_modelo varchar (50) not null,
promessa_compra_venda_preenchido varchar (50) not null,
quadro_resumo_modelo varchar (50) not null,
requerimento_cartorio_modelo varchar (50) not null,
requerimento_cartorio_preenchido varchar (50) not null
);

create table formas_pagto(
valor_sinal_entrada decimal(10,2) not null,
qtd_parc_sinal_entrada integer not null,
data_venc_sinal_entada varchar (10) not null,
saldo_restante decimal (10,2) not null,
qtd_parc_saldo_restante integer not null,
valor_parc_saldo_rest decimal(10,2) not null,
data_vencto_parc_saldo_restante varchar (10) not null,
forma_pagto_sinal_entrada varchar (10) not null,
forma_pagto_saldo_restante varchar (10) not null
);

create table documentos(
certidao_casamento varchar (50),
certidao_nascimento varchar (50) not null,
comprovante_renda varchar (50) not null,
conjunto_plt_imovel varchar (50) not null,
escritura_assinada varchar (50) not null,
laudo_itbi varchar (50) not null,
manual_usuario varchar (50),
quadro_resumo varchar (50),
registro_imoveis_assinado varchar (50) not null
)

