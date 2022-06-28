# edunftapi
Buid api supply for nft diplimas, course ...

--- Install enviroiment ----
Prepare the environment (docker):

image: base CentOS (Reson does not make go lang, so build on Alpine)

curl, wget, git

make, gcc

npm >= 8.1.2

node >= 16.13.2

Prepare the enviroiment (lib): 

prepare-enviroment.sh

Deploy Smart Contract (Skip if the contract is already deployed and has a contract_address, because every time you depploy the wallet, you lose Aura coin):

Nếu chưa có ví cần tạo ví mới trên local: 


aurad add keys wallet
Nếu đã có ví cần deploy ví lên testnest bằng cách chat Discord sau đó map thông tin ví đã có vào minter_address: 


INIT='{"minter":"{minter_address}","name":"Aura NFT","symbol":"ANFT"}'
CODE_ID được lấy sau khi chat trên discord lấy tx_hash (không dùng tx_hash để get ra CODE_ID được)


# instantiate contract
aurad tx wasm instantiate $CODE_ID "$INIT" \
    --from wallet --label "cw721" $TXFLAG -y --no-admin
Không cần quan tâm 2 bước trên chạy file .sh để deploy contract của Sargon (chú ý phải dùng tx_hash lấy ra từ $RES, cần sửa file này trước khi chạy):

deploy_contract.sh
28 Jun 2022, 08:13 PM
Run dapp

Team đang sử dụng config:

MNEMONIC='barely leave mother plunge broccoli loud tube hamster arctic captain fiber jar'
RPC='https://rpc.serenity.aura.network:443'
CONTRACT='aura1eq9uvjm5l9p3a8qwv9z0asxy494wu0uy7mrcw9vjke0p0a2ml8aqjqqxz4'
WEB3_STORAGE_TOKEN='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGFjNURkN0FhZTJlMzRkRTIwMERlNDMzMmEzMzc2NTg1MTdGREU5MmIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTUyMTk5NTUyMDQsIm5hbWUiOiJlZHVuZnQifQ.aVy6SipARDbg-sB5IE7g_0olgHWWxxSRFhspx_3mrxE'

Run file sh:


code create ntf
