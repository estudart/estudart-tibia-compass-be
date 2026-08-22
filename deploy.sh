#!/usr/bin/env bash
set -euo pipefail

PROJECT="estudart-tibia-compass"
REGION="us-central1"
REPO="tibia-compass"
SERVICE="estudart-tibia-compass-be"
IMAGE="${REGION}-docker.pkg.dev/${PROJECT}/${REPO}/${SERVICE}"

TAG="$(git rev-parse --short HEAD)$([ -n "$(git status --porcelain)" ] && echo "-dirty")"

echo "==> Building ${IMAGE}:${TAG}"
docker build --platform linux/amd64 -t "${SERVICE}" .

echo "==> Tagging"
docker tag "${SERVICE}" "${IMAGE}:${TAG}"

echo "==> Configuring docker auth for Artifact Registry"
gcloud auth configure-docker "${REGION}-docker.pkg.dev" --quiet

echo "==> Pushing ${IMAGE}:${TAG}"
docker push "${IMAGE}:${TAG}"

echo "==> Deploying to Cloud Run"
gcloud run deploy "${SERVICE}" \
  --image="${IMAGE}:${TAG}" \
  --project="${PROJECT}" \
  --region="${REGION}"

echo "==> Done. Deployed ${IMAGE}:${TAG}"
