- NFT deployment showcase for eth. test env. rinkeby and ropsten. Test env. could be customized inside truffle-config.js
- 1. generate the file inside ipfs by running run-script.js with command `NODE_ENV=dev node scripts/run-script.js` by uncommenting following line digital art will be put into ipfs.
     //const filePath = path.join(**dirname, "../assets/kara.png");
     and comment below one.
     const filePath = path.join(**dirname, "../data/metadata.json");

- 2. after file is created, metadata for file should be put into ipfs that opensea can track of the item and could be shown in metamask after we add in our wallet. By doing to opposite of above uncommenting etc. again, metadata will be pushed into ipfs that we can claim as an itemUri for smart contract after deployment.

- 3. Run following command `npx truffle migrate --network rinkeby` and after deployment success, run one by one following inside truffle console. `npx truffe console --network rinkeby`

* let art = await Kara.deployed();
* art.claimItem('https://ipfs.io/ipfs/<METADATA-ID-FROM_IPFS>')
* example: await kara.claimItem('https://ipfs.io/ipfs/QmUt1E7Me8H6Tz8NmUPs42rPA6g5RSDcCdRRHv9zAJQvgM?filename=IMG-20210328-WA0004.jpg')

- 4. Our digital art can be added inside import nft in metamask wallet by contract id and token id (which beginning with 1 and increments 1 by 1 for each item also can be found with claimItem transaction id with command
     `await art.getTokenId(<ADDRESS_HASH>)`
     EXAMPLE: `await art.getTokenId("0x25Fd9BD0914A0920de80439B7c1FC7c983A50eF9")`

test opensea collectibles:
https://testnets.opensea.io/0xb87452f101403aa837f4e2aebd65ab9c897da534
<img width="1779" alt="Screen Shot 2022-03-03 at 09 30 25" src="https://user-images.githubusercontent.com/5943814/156509242-7b2b3aef-07d7-40f8-ab67-3e78b22105f9.png">
