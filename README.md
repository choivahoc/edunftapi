# edunftapi
Buid api supply for nft diplimas, course ...

--- Install enviroiment ----
# Prepare the environment (docker):

image: base CentOS (Reson does not make go lang, so build on Alpine)

curl, wget, git

make, gcc

npm >= 8.1.2

node >= 16.13.2

# Prepare the enviroiment (lib): 

# prepare-enviroment.sh

Deploy Smart Contract (Skip if the contract is already deployed and has a contract_address, because every time you depploy the wallet, you lose Aura coin):

If you don't have a wallet, you need to create a new wallet locally: 

# Aurad add keys wallet

If you already have a wallet, you need to deploy the wallet to testnest by chatting with Discord then map the existing wallet infomation to minter_address:

INIT='{"minter":"{minter_address}","name":"Aura NFT","symbol":"ANFT"}'
CODE_ID is obtained affter chatting on discord  to get tx_hash (cannot use tx_hash  to get CODE_ID)


# instantiate contract
aurad tx wasm instantiate $CODE_ID "$INIT" \
    --from wallet --label "cw721" $TXFLAG -y --no-admin
No need to care about the above 2 steps, run the .sh file to deploy Sargon's contract (Note that you must use tx_hash take from $RES, need to edit this fil before running)

# deploy_contract.sh

# Run dapp

# Team is using config:

MNEMONIC='barely leave mother plunge broccoli loud tube hamster arctic captain fiber jar'
RPC='https://rpc.serenity.aura.network:443'
CONTRACT='aura1eq9uvjm5l9p3a8qwv9z0asxy494wu0uy7mrcw9vjke0p0a2ml8aqjqqxz4'
WEB3_STORAGE_TOKEN='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGFjNURkN0FhZTJlMzRkRTIwMERlNDMzMmEzMzc2NTg1MTdGREU5MmIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTUyMTk5NTUyMDQsIm5hbWUiOiJlZHVuZnQifQ.aVy6SipARDbg-sB5IE7g_0olgHWWxxSRFhspx_3mrxE'

Run file sh:


code create ntf
