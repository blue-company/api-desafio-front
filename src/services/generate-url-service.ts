import path, { extname, resolve } from "path";
import fs, { createWriteStream } from "fs";
import { pipeline, Readable } from "stream";
import { promisify } from "util";
import { randomUUID } from "crypto";
import { env } from "@/env";

export class GenerateUrlService {
  async execute(
    hostname: string,
    protocol: string,
    file: Express.Multer.File
  ): Promise<string> {
    const pump = promisify(pipeline);
    const uploadDir = path.resolve(process.cwd(), "../images/");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const bufferStream = new Readable();
    bufferStream.push(file.buffer);
    bufferStream.push(null);

    const fileId = randomUUID();
    const fileName = `${fileId}.png`;

    const writeStream = createWriteStream(resolve(uploadDir, fileName));

    await pump(bufferStream, writeStream);

    const fullUrl = protocol.concat("://").concat(`${hostname}:${env.PORT}`);

    const fileUrl = new URL(`images/${fileName}`, fullUrl).toString();

    return fileUrl;
  }
}
