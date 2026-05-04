import React from "react";

export default function BlogENS() {
  return (
    <article className="space-y-8">

      <p className="leading-8">
        Most developers think of a domain as something you buy from Namecheap or GoDaddy.
        You pay annually, you configure DNS, you hope you don't forget to renew.
        But there's a different kind of domain , one you own permanently, stored on the blockchain,
        that no registrar can take from you.
        That's what an <strong>ENS name</strong> is.
      </p>

      <p className="leading-8">
        ENS stands for <strong>Ethereum Name Service</strong>.
        It's the Web3 equivalent of DNS : a decentralized naming system built on the Ethereum blockchain.
        Instead of pointing a domain to an IP address, you point a <code className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200 rounded">.eth</code> name
        to a wallet address, an IPFS site, a content hash, or anything else you want to resolve to.
      </p>

      <p className="leading-8">
        And the most practical part?
        You can use it as a real website address  like <strong>joebakid.eth.limo</strong>  [My Personal Ens].
      </p>

      <h2 className="text-2xl font-semibold mt-10">
        What Is a .eth Name?
      </h2>

      <p className="leading-8">
        A <code className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200 rounded">.eth</code> name is
        a domain you register through the ENS protocol at <strong>app.ens.domains</strong>.
        Unlike traditional domains, it lives permanently on the Ethereum blockchain.
        You don't rent it from a company ,  you own the NFT that represents it.
      </p>

      <p className="leading-8">
        Once you own it, you can:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Use it as your wallet address  people send ETH to <code className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded">bakid.eth</code> instead of <code className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded">0x4a3b...</code></li>
        <li>Point it to a decentralized website hosted on IPFS</li>
        <li>Attach social profile data Twitter, GitHub, email, avatar</li>
        <li>Use it as a human readable identity across Web3 apps</li>
        <li>Serve a real accessible website via the <strong>.limo</strong> gateway</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10">
        How to Set Up Your ENS Name as a Website
      </h2>

      <p className="leading-8">
        Here's the full flow  from registering the name to having a live site accessible on the web.
      </p>

      <h3 className="text-xl font-semibold mt-6">Step 1 — Register Your ENS Name</h3>

      <p className="leading-8">
        Go to <strong>app.ens.domains</strong>, connect your wallet (MetaMask works fine),
        and search for your name. Registration costs a small ETH gas fee plus a yearly fee
        (roughly $5/year for 5+ character names). You can register for multiple years upfront.
      </p>

      <p className="leading-8">
        Once registered, you own the NFT. That's your domain.
      </p>

      <h3 className="text-xl font-semibold mt-6">Step 2 — Host Your Site on IPFS</h3>

      <p className="leading-8">
        ENS domains resolve to content hashes, not server IPs.
        That means your site needs to be hosted on a decentralized network — IPFS is the standard choice.
      </p>

      <p className="leading-8">
        The easiest way to do this is with <strong>Fleek</strong> or <strong>Pinata</strong>.
        Build your site normally (plain HTML, React, whatever), then deploy it to IPFS.
        You'll receive a content hash (CID) that looks like:
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
{`ipfs://bafybeig6c57nyzifl6ygbcnx7aln2gzpzg...`}
      </pre>

      <p className="leading-8">
        That's your site's permanent address on the decentralized web.
      </p>

      <h3 className="text-xl font-semibold mt-6">Step 3 — Set the Content Hash in ENS</h3>

      <p className="leading-8">
        Back in <strong>app.ens.domains</strong>, go to your name's record editor.
        Find the <strong>Content Hash</strong> field and paste your IPFS CID.
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
{`Content Hash → ipfs://bafybeig6c57nyzifl6ygbcnx7aln2gzpzg...`}
      </pre>

      <p className="leading-8">
        Save it. Pay the gas. Once confirmed on-chain, your ENS name is now pointing to your site.
      </p>

      <h3 className="text-xl font-semibold mt-6">Step 4 — Access It via .limo</h3>

      <p className="leading-8">
        This is the bridge that makes your ENS site accessible to anyone on the regular web.
        The <strong>.limo</strong> gateway is a public HTTPS gateway that reads ENS content hashes
        and serves them as normal web pages.
      </p>

      <p className="leading-8">
        The pattern is simple:
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
{`https://yourname.eth.limo`}
      </pre>

      <p className="leading-8">
        So <strong>joebakid.eth</strong> becomes accessible at:
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
{`https://joebakid.eth.limo`}
      </pre>

      <p className="leading-8">
        No DNS configuration. No hosting bill. No renewal trap.
        The .limo service reads your ENS record, fetches your IPFS content, and serves it live.
      </p>

      <h2 className="text-2xl font-semibold mt-10">
        Brave Browser: Native ENS Resolution
      </h2>

      <p className="leading-8">
        Here's where it gets interesting.
      </p>

      <p className="leading-8">
        If you type <strong>bakid.eth</strong> directly into the Brave browser address bar —
        no <code className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded">.limo</code>, no nothing — it resolves.
        Brave has <strong>built-in ENS support</strong> at the browser level.
      </p>

      <p className="leading-8">
        Brave integrates with the Ethereum blockchain natively.
        When you type a <code className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded">.eth</code> address,
        it queries ENS directly, fetches the content hash, and loads the IPFS site — all without a gateway.
        That's true decentralized browsing.
      </p>

      <p className="leading-8">
        You can test it right now. Open Brave and type:
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
{`bakid.eth`}
      </pre>

      <p className="leading-8">
        It loads. No extra setup needed.
      </p>

      <h2 className="text-2xl font-semibold mt-10">
        Why Chrome Doesn't Resolve .eth Domains
      </h2>

      <p className="leading-8">
        Chrome doesn't support ENS natively — and this isn't an accident.
      </p>

      <p className="leading-8">
        Chrome relies entirely on the traditional <strong>DNS system</strong> (Domain Name System),
        which is managed by ICANN. ICANN controls which TLDs (top-level domains) are valid.
        As of now, <code className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded">.eth</code> is not
        an ICANN-registered TLD — it exists only on the Ethereum blockchain.
      </p>

      <p className="leading-8">
        When you type <code className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded">bakid.eth</code> in Chrome,
        it doesn't know what to do with it. It either searches Google for it or throws a DNS resolution error.
        Chrome has no Ethereum node, no ENS resolver, and no knowledge that a blockchain-based naming system exists.
      </p>

      <p className="leading-8">
        In short:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Chrome speaks DNS — a centralized protocol controlled by registrars</li>
        <li>ENS speaks Ethereum — a decentralized protocol on the blockchain</li>
        <li>They don't speak the same language</li>
      </ul>

      <p className="leading-8">
        That's why the <code className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded">.limo</code> gateway exists —
        it acts as a translator. It takes your ENS name, resolves it on the blockchain side,
        and returns the content as a regular HTTPS response that Chrome can understand.
      </p>

      <p className="leading-8">
        The trade-off is that <code className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded">.limo</code> introduces a trusted third party.
        Using Brave with native ENS is the truly trustless option — but for sharing links publicly,
        <code className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded"> yourname.eth.limo</code> is what works everywhere.
      </p>

      <h2 className="text-2xl font-semibold mt-10">
        ENS vs Traditional Domains
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Ownership</strong> — ENS is an NFT. You own it. No registrar can revoke it.</li>
        <li><strong>Renewal</strong> — Small yearly fee paid in ETH, no renewal trap pricing</li>
        <li><strong>Hosting</strong> — IPFS content is permanent and censorship-resistant</li>
        <li><strong>Identity</strong> — One name ties your wallet, site, and social profile together</li>
        <li><strong>Browser support</strong> — Works natively in Brave; needs .limo on Chrome/Safari/Firefox</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10">
        Final Thoughts
      </h2>

      <p className="leading-8">
        Your ENS name is more than a wallet shortcut.
        It's a full Web3 identity , one that can serve a real website,
        receive crypto payments, and carry your profile across the decentralized web.
      </p>

      <p className="leading-8">
        Setting it up takes less than 30 minutes.
        The result is a site that no company can take down,
        no registrar can expire, and no authority can censor.
      </p>

      <p className="leading-8 font-medium">
        The web was supposed to be decentralized from the start.
        ENS is just finishing the job.
      </p>

    </article>
  );
}