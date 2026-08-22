FROM node:22-slim

WORKDIR /estudart-tibia-compass-be

ADD dist /estudart-tibia-compass-be/dist/

ADD node_modules /estudart-tibia-compass-be/node_modules

EXPOSE 3000

CMD ["node", "dist/main"]
