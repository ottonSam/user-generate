import express from "express";
import _4devs from "@killovsky/4devs";

const app = express();

app.get("/", (req, res) => {
  _4devs.gerar("1", false, "pessoa").then((data) => res.json(data.dados));
});

app.listen("3000", () => console.log("O servidor esta rodando na porta 3000"));
