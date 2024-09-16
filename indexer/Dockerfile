FROM golang:1.22.5-alpine AS build

WORKDIR /finder/indexer

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN go build -o finder

EXPOSE 3001

CMD ["./finder"]
