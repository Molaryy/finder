import './App.css'
import { Button } from "@/components/ui/button"
import {Loader2} from "lucide-react";
import React, {useState} from "react";
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const isValidEthAddress = (adr: string): boolean => {
  return adr[0] === '0' && adr[1] === 'x' && adr.length === 42 && adr.match(/^[a-z0-9]+$/i) !== null
}

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [address, setAddress] = useState<string>("")
  const [adrFormatError, setAdrFormatError] = useState<boolean>(false)
  const [canSendAddress, setCanSendAddress] = useState<boolean>(false)

  const getTransactions = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // send address via rpc
  }

  const handleChangeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAddress = event.target.value;
    setAddress(newAddress)

    setCanSendAddress(false)
    if (isValidEthAddress(newAddress)) {
      setAdrFormatError(false)
      setCanSendAddress(true)
    } else if (newAddress.length == 0) {
      setAdrFormatError(false)
    } else {
      setAdrFormatError(true)
    }
  }

  const handlePasteAddress = (event: React.ClipboardEvent) => {
    const newAddress = event.clipboardData.getData("text");
    setAddress(newAddress)

    setCanSendAddress(false)
    if (isValidEthAddress(newAddress)) {
      setAdrFormatError(false)
      setCanSendAddress(true)
    } else if (newAddress.length == 0) {
      setAdrFormatError(false)
    } else {
      setAdrFormatError(true)
    }
  }

  return (
    <div>
      <form className={"mt-[15rem] ml-[32%]"}>
        <div className={"flex"}>
          <Select>
            <SelectTrigger className="w-[115px] mr-3">
              <SelectValue placeholder="Blockchain" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Blockchains</SelectLabel>
                <SelectItem value="Ethereum">Ethereum</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            placeholder="0xc0ffee254729296a45a3885639AC7E10F9d54979"
            maxLength={42}
            onChange={handleChangeAddress}
            onPaste={handlePasteAddress}
            className="max-w-sm"
          />
          <Button className={"ml-2 bg-white text-[black] hover:bg-white"} onClick={getTransactions}>
            {isLoading && canSendAddress ? <Loader2 className="mr-2 h-4 w-4 animate-spin bg-white"/> : <>Find</>}
          </Button>
        </div>
        <p className={"text-[red] mt-2 ml-[8rem]"}>{adrFormatError ? "Invalid Ethereum address" : ""}</p>
      </form>
    </div>
  )
}

export default App;
