FROM node:lts-bullseye-slim AS base

FROM base AS builder

RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
  apt-get -y update && \
  apt-get -y install gcc g++

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN corepack install -g pnpm

RUN --mount=type=cache,id=pnpm,target=/pnpm/store,sharing=locked \
  pnpm add --global turbo@^2

WORKDIR /app

COPY . .

RUN --mount=type=cache,id=pnpm,target=/pnpm/store,sharing=locked \
  pnpm install --frozen-lockfile

WORKDIR /app

RUN pnpm build

FROM base AS runner

RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
  apt-get -y update && \
  apt-get -y install dumb-init

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone .
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

ENV HOSTNAME=0.0.0.0
ENV PORT=80

ENTRYPOINT [ "/usr/bin/dumb-init", "--" ]
CMD ["node", "server.js"]
