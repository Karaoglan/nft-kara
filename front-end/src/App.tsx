import React, { useEffect, useState } from "react";
import "./App.css";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { contractAddress, abi } from "./Kara";
import web3 from "./web3";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const [account, setAccount] = useState<string>();
  const [count, setCount] = useState<number>(0);
  const [kara, setKara] = useState(new web3.eth.Contract(abi, contractAddress));

  useEffect(() => {
    async function load() {
      // @ts-ignore

      const accounts = await web3.eth.requestAccounts();
      console.log(accounts);
      setAccount(accounts[0]);
      const totalSupply = await kara.methods.totalSupply().call();
      console.log(totalSupply);
    }

    load();
  }, []);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Container component="main" maxWidth="xs">
        <div>
          <Toolbar>
            <Typography variant="h6">MINT TOKEN</Typography>
          </Toolbar>
        </div>
        <Card>
          <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Click mint for nft minting
            </Typography>
            <Typography variant="body2">
              Click GET token to get token id
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                console.log("call mint");
                console.log(account);
                kara.methods
                  .claimItem(
                    "https://ipfs.io/ipfs/QmPdRZtmSKfUsNp254ZCJkWPh1xZDFatBvK1CMXxNFdzXB"
                  )
                  .send({ from: account })
                  .then(console.log);
              }}
            >
              MINT
            </Button>
            <Button
              size="small"
              onClick={() => {
                console.log("call token");
                kara.methods
                  .getTokenId("0x25Fd9BD0914A0920de80439B7c1FC7c983A50eF9")
                  .call()
                  .then(console.log);
              }}
            >
              GET TOKEN
            </Button>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
}

export default App;
