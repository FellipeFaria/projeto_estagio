import { connect } from "../conexao.js";

export class SalesController {
  static async getSales(_, res) {
    let db;
    try {
      db = await connect();

      const result = await db.all(`
        SELECT 
          v.id_venda,
          v.data_venda,
          v.metodo_pagamento,
          pv.quantidade,
          pv.valor_unit,
          p.id_produto,
          p.nome_produto,
          p.preco_produto
        FROM venda v
        INNER JOIN produto_venda pv ON pv.id_venda = v.id_venda
        INNER JOIN produto p ON p.id_produto = pv.id_produto
      `);

      if (!result || result.length === 0) {
        return res.status(200).json([]);
      }

      const vendasMap = {};

      for (const row of result) {
        if (!vendasMap[row.id_venda]) {
          vendasMap[row.id_venda] = {
            id_venda: row.id_venda,
            data_venda: row.data_venda,
            metodo_pagamento: row.metodo_pagamento,
            produtos: [],
          };
        }

        vendasMap[row.id_venda].produtos.push({
          id_venda: row.id_venda,
          id_produto: row.id_produto,
          quantidade: row.quantidade,
          valor_unit: row.valor_unit,
          produto: {
            id_produto: row.id_produto,
            nome_produto: row.nome_produto,
            preco_produto: row.preco_produto,
          },
        });
      }

      res.status(200).json(Object.values(vendasMap));
    } catch (error) {
      console.error("Erro ao buscar vendas:", error.message);
      res.status(500).json({
        error: "Erro ao buscar vendas",
        details: error.message,
      });
    } finally {
      if (db) await db.close();
      console.log("Conexão com o banco fechada.");
    }
  }

  static async makeSale(req, res) {
    let db;
    try {
      const saleData = req.body;
      console.log("Body recebido:", saleData);

      const produtos = saleData.produtos;
      if (
        !saleData.metodo_pagamento ||
        !Array.isArray(produtos) ||
        produtos.length === 0
      ) {
        return res.status(400).json({
          error: "Dados inválidos",
          details: "Método de pagamento e lista de produtos são obrigatórios",
        });
      }

      db = await connect();
      console.log("🔌 Conectado ao banco.");

      const sale = await db.run(
        "INSERT INTO venda (metodo_pagamento) VALUES (?)",
        [saleData.metodo_pagamento]
      );

      for (const produto of produtos) {
        const { id_produto, quantidade, valor_unit } = produto;
        if (!id_produto || !quantidade || !valor_unit) {
          throw new Error(`Produto inválido: ${JSON.stringify(produto)}`);
        }

        console.log("Inserindo produto:", produto);

        await db.run(
          `INSERT INTO produto_venda (id_venda, id_produto, quantidade, valor_unit)
             VALUES (?, ?, ?, ?)`,
          [sale.lastID, id_produto, quantidade, valor_unit]
        );
      }

      res.status(201).json({
        message: "Venda registrada com sucesso",
      });
    } catch (error) {
      console.error("Erro geral:", error.message);
      res.status(500).json({
        error: "Erro no processamento",
        details: error.message,
      });
    } finally {
      if (db) {
        await db.close();
      }
    }
  }
}
