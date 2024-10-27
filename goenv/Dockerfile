FROM golang AS builder
WORKDIR /build 
COPY . .
run CGO_ENABLED=0 go build -o goenv

FROM scratch AS prod
WORKDIR /app
COPY --from=builder /build/ /app
EXPOSE 8080
CMD ["/app/goenv"]
