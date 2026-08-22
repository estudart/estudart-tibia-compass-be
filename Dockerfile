# --- builder: compiles TypeScript inside the image, source is the only input ---
FROM node:22-slim AS builder

WORKDIR /estudart-tibia-compass-be

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# --- runtime: only the compiled output + production deps ship ---
FROM node:22-slim

WORKDIR /estudart-tibia-compass-be

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /estudart-tibia-compass-be/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main"]
