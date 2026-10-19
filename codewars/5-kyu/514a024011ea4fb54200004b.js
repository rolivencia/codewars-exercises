// Solution for the 514a024011ea4fb54200004b problem at CodeWars: Extract the domain name from an URL (5 kyu)

function domainName(url){
  const protocolSplit = url.split('//')
  const withoutProtocol = protocolSplit.length > 1 ? protocolSplit[1] : protocolSplit[0]
  const subdomainSplit = withoutProtocol.split('www.')
  const withoutSubdomain = subdomainSplit.length > 1 ? subdomainSplit[1] : subdomainSplit[0]
  let result = withoutSubdomain.slice(0, withoutSubdomain.indexOf('.'))
  return result
}
