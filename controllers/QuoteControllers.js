import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getQuote = async (req, res) => {
  try {
    const response = await prisma.quote.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ mgs: error.mesagge });
  }
};
export const getQuoteId = async (req, res) => {
  try {
    const response = await prisma.quote.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.mesagge });
  }
};
export const createQuote = async (req, res) => {
  const { name, qoute } = req.body;
  try {
    const create = await prisma.quote.create({
      data: {
        name: name,
        qoute: qoute,
      },
    });
    res.status(201).json(create);
  } catch (error) {
    res.status(400).json({ msg: error.mesagge });
  }
};

export const updateQuote = async (req, res) => {
  const { name, qoute } = req.body;

  try {
    const update = await prisma.quote.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name: name,
        qoute: qoute,
      },
    });
    res.status(200).json(update);
  } catch (error) {
    res.status(400).json({ msg: error.mesagge });
  }
};

export const deleteQuote = async (req, res) => {
  try {
    const hapus = await prisma.quote.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(hapus);
  } catch (error) {
    res.status(400).json({ msg: error.mesagge });
  }
};
