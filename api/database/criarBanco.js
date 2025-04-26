import { connect } from "../conexao.js";

const db = await connect();

db.exec(
  `
  DROP TABLE IF EXISTS forma_pagamento ;
  DROP TABLE IF EXISTS produto_venda  ;
  DROP TABLE IF EXISTS venda ;
  DROP TABLE IF EXISTS produto ;

  CREATE TABLE venda (
    id_venda INTEGER PRIMARY KEY AUTOINCREMENT,
    data_venda TEXT DEFAULT CURRENT_TIMESTAMP,
    metodo_pagamento TEXT,
    FOREIGN KEY (metodo_pagamento) REFERENCES forma_pagamento(metodo_pagamento)
  );

  CREATE TABLE produto_venda (
    id_venda INTEGER,
    id_produto INTEGER,
    quantidade REAL,
    valor_unit REAL,
    PRIMARY KEY (id_venda, id_produto), 
    FOREIGN KEY (id_venda) REFERENCES venda(id_venda),
    FOREIGN KEY (id_produto) REFERENCES produto(id_produto)
  );

  CREATE TABLE produto (
    id_produto INTEGER PRIMARY KEY AUTOINCREMENT,
    preco_produto REAL NOT NULL,                  
    nome_produto TEXT NOT NULL         
  );

  CREATE TABLE forma_pagamento (
    metodo_pagamento TEXT PRIMARY KEY      
  );

  INSERT INTO forma_pagamento (metodo_pagamento) VALUES ("Dinheiro");
  INSERT INTO forma_pagamento (metodo_pagamento) VALUES ("Boleto");
  INSERT INTO forma_pagamento (metodo_pagamento) VALUES ("Pix");
  INSERT INTO forma_pagamento (metodo_pagamento) VALUES ("Cartao de Credito");
  INSERT INTO forma_pagamento (metodo_pagamento) VALUES ("Cartao de Debito");
`,
  console.log("Sucesso ao criar tabelas!!")
);
