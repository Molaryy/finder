package main

func main() {

}

/*import (
	"context"
	"fmt"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/ethclient"
	"log"
)

var (
	infuraURL = "https://mainnet.infura.io/v3/" + GetEnvFileValue(".env", "INFURA_KEY")
)

func main() {
	// create new eth client
	client, err := ethclient.DialContext(context.Background(), infuraURL)

	if err != nil {
		log.Fatalf("Error while creating an ether client: %v", err)
	}
	defer client.Close()

	// if nil is passed we will get the last block of the eth blockchain
	block, err := client.BlockByNumber(context.Background(), nil)

	if err != nil {
		log.Fatalf("Error while getting a block: %v", err)
	}
	fmt.Println("Block nb: ", block.Number())
	addr := "0x55773Db0A813d22F4289768de0426f7E369D565a"
	address := common.HexToAddress(addr)

	balance, err := client.BalanceAt(context.Background(), address, nil)

	if err != nil {
		log.Fatalf("Error while trying to get the balance: %v", err)
	}
	fmt.Printf("Add(%s): %d", addr, balance)
}
*/
