/* DNS를 다룰떄 사용하는 모듈입니다. 주로 도메인을 통해 IP나 기타 DNS 정보를 얻고자 할떄 사용합니다.  */

import dns from 'dns/promises';

const ip = dns.lookup('opennote.co.kr');
console.log('OpenNote DNS IP : ', ip);

const a = await dns.resolve('opennote.co.kr', 'A'); // Server IPv4 주소
console.log('OpenNote Ipv4 : ',a);

const ns = await dns.resolve('opennote.co.kr', 'NS');  // 네임서버 정보
console.log('OpenNote NameServer : ',ns);

const soa = await dns.resolve('opennote.co.kr', 'SOA');  // 도메인 정보
console.log('OpenNote SOA : ',soa);

const mx = await dns.resolve('opennote.co.kr', 'MX');  // Mail Server
console.log('OpenNote MX : ',mx);

const cname = await dns.resolve('www.opennote.co.kr', 'CNAME'); // 별칭주소
console.log('CNAME : ', cname);

const any = await dns.resolve('opennote.co.kr', 'ANY'); //
console.log('OpenNote any : ', any);
