FROM golang:1 AS builder

WORKDIR /src

COPY go.mod ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 GOMAXPROCS=1 go build -p=1 -mod=mod -trimpath -ldflags="-s -w" -o /site .

FROM alpine:3.22

RUN apk add --no-cache ca-certificates tzdata

WORKDIR /app

COPY --from=builder /site ./site
COPY --from=builder /src/views ./views
COPY --from=builder /src/assets ./assets
COPY --from=builder /src/css ./css
COPY --from=builder /src/scripts ./scripts

USER 65534:65534

EXPOSE 6969

CMD ["./site"]
