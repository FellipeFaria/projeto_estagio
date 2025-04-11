import { connect } from "../conexao.js";

export class ProductController {
  static async getAllProducts(_, res) {
    try {
      const db = await connect();

      const products = await db.all("SELECT * FROM produto");

      await db.close();

      res.status(200).json(products);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getProduct(req, res) {
    try {
      const db = await connect();

      const product = await db.get(`SELECT * FROM produto WHERE id_produto=?`, [
        req.params.id,
      ]);

      await db.close();

      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async addProduct(req, res) {
    try {
      const productData = req.body;
      const db = await connect();

      await db.run(
        "INSERT INTO produto (preco_produto, nome_produto) VALUES (?, ?)",
        [productData.preco_produto, productData.nome_produto]
      );

      await db.close();

      res.status(201).json({ message: "Produto cadastrado com sucesso" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async editProduct(req, res) {
    try {
      const productData = req.body;

      const db = await connect();

      await db.run(
        "UPDATE produto SET preco_produto=?, nome_produto=? WHERE id_produto=?",
        [productData.preco_produto, productData.nome_produto, req.params.id]
      );

      await db.close();

      res.status(200).json({ message: "Produto atualizado com sucesso" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async deleteProduct(req, res) {
    try {
      const db = await connect();

      await db.run("DELETE FROM produto WHERE id_produto=?", [req.params.id]);

      await db.close();

      res.status(200).json({ message: "Produto deletado com sucesso" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}
