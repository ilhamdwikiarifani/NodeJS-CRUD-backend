import express from "express";
import {
  getQuote,
  getQuoteId,
  createQuote,
  updateQuote,
  deleteQuote,
} from "../controllers/QuoteControllers.js";

const router = express.Router();

router.get(`/quote`, getQuote);
router.get(`/quote/:id`, getQuoteId);
router.post(`/quote`, createQuote);
router.patch(`/quote/:id`, updateQuote);
router.delete(`/quote/:id`, deleteQuote);

export default router;
