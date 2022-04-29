import axios from "axios";

const get = axios.get('https://rest.cryptoapis.io/v2/wallet-as-a-service/info/ethereum/ropsten/supported-tokens?context=yourExampleString&limit=50&offset=0',{
    headers:{
    "X-API-Key":'8473b13d983e2d1a7a5bcdb7e58553542069dade'
    }}
).then(resp => resp)

export {get}
