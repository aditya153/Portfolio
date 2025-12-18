import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import fs from "fs";

export function registerRoutes(
  httpServer: Server,
  app: Express
): Server {

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, id: message.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          error: "Validation failed",
          details: error.errors
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({
          success: false,
          error: "Failed to submit message"
        });
      }
    }
  });

  app.get("/api/cv/download", (req, res) => {
    const cvPath = path.join(process.cwd(), "attached_assets", "Aditya_Nirgude_Lebenslauf.pdf");

    if (fs.existsSync(cvPath)) {
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=Aditya_Nirgude_CV.pdf");
      const fileStream = fs.createReadStream(cvPath);
      fileStream.pipe(res);
    } else {
      res.status(404).json({ error: "CV file not found" });
    }
  });

  app.get("/api/contact/messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  return httpServer;
}
