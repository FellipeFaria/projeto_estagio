import { connect } from "../conexao.js";

export class ProductController {
  static async getAllProducts(_, res) {
    let db;
    try {
      db = await connect();

      const products = await db.all("SELECT * FROM produto");

      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({
        error: "Erro ao buscar produtos",
        details: error.message,
      });
    } finally {
      if (db) await db.close();
    }
  }

  static async addProduct(req, res) {
    let db;
    try {
      const productData = req.body;
      db = await connect();

      if (!productData.preco_produto || !productData.nome_produto) {
        return res.status(400).json({
          error: "Dados inválidos",
          details: "Preço do produto e nome do produto são obrigatórios",
        });
      }

      const result = await db.run(
        "INSERT INTO produto (preco_produto, nome_produto) VALUES (?, ?)",
        [productData.preco_produto, productData.nome_produto]
      );

      const product = await db.get("SELECT * FROM produto WHERE id_produto=?", [
        result.lastID,
      ]);

      res
        .status(201)
        .json({ ...product, message: "Produto cadastrado com sucesso" });
    } catch (error) {
      return res.status(500).json({
        error: "Erro no processamento",
        details: error.message,
      });
    } finally {
      if (db) await db.close();
    }
  }

  static async editProduct(req, res) {
    let db;
    try {
      const productData = req.body;

      db = await connect();

      if (!productData.preco_produto || !productData.nome_produto) {
        return res.status(400).json({
          error: "Dados inválidos",
          details: "Preço do produto e nome do produto são obrigatórios",
        });
      }

      const product = await db.run(
        "UPDATE produto SET preco_produto=?, nome_produto=? WHERE id_produto=?",
        [productData.preco_produto, productData.nome_produto, req.params.id]
      );

      if (!product.changes) {
        return res.status(404).json({
          error: "Produto não encontrado",
        });
      }

      res.status(200).json({ message: "Produto atualizado com sucesso" });
    } catch (error) {
      res.status(500).json({
        error: "Erro no precessamento",
        details: error.message,
      });
    } finally {
      if (db) await db.close();
    }
  }

  static async deleteProduct(req, res) {
    let db;
    try {
      db = await connect();

      const product = await db.run("DELETE FROM produto WHERE id_produto=?", [
        req.params.id,
      ]);

      if (!product.changes) {
        return res.status(404).json({
          error: "Produto não encontrado",
        });
      }

      res.status(200).json({ message: "Produto deletado com sucesso" });
    } catch (error) {
      res.status(500).json({
        error: "Erro no processamento",
        details: error.message,
      });
    } finally {
      if (db) await db.close();
    }
  }
}
