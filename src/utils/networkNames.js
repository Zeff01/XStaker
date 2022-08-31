export default function networkIDNames(chainId) {
  switch (String(chainId)) {
    case "1":
      return "Mainnet";
    case "3":
      return "Ropsten";
    case "4":
      return "Rinkeby";
    case "42":
      return "Kovan";
    default:
      return "Unknown";
  }
}


