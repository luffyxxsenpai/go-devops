FROM golang AS builder
WORKDIR /build
COPY . .
RUN CGO_ENABLED=0 go build -o mygo ./main.go

FROM scratch AS prod
WORKDIR /app
COPY --from=builder /build/ /app/
ENV PORT=9000
CMD ["/app/mygo"]


