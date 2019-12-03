var enderecoContrato = "0x2A929beC871E0c01F60876Cd3F8814A87a585f34";
var provedor = new ethers.providers.Web3Provider(web3.currentProvider);
ethereum.enable();
var signatario = provedor.getSigner();
var contrato = new ethers.Contract(enderecoContrato, abiContrato, signatario);
