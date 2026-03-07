import React, { useState, useMemo } from "react";

// --- Expanded Command Data ---
const BASIC_COMMANDS = [
  { cmd: "ls", desc: "List directory contents" },
  { cmd: "cd", desc: "Change the shell working directory" },
  { cmd: "pwd", desc: "Print name of current/working directory" },
  { cmd: "mkdir", desc: "Create a new directory" },
  { cmd: "touch", desc: "Change file timestamps (create empty files)" },
  { cmd: "rm", desc: "Remove files or directories" },
  { cmd: "cp", desc: "Copy files and directories" },
  { cmd: "mv", desc: "Move (rename) files" },
  { cmd: "cat", desc: "Concatenate and print files" },
  { cmd: "echo", desc: "Display a line of text" },
  { cmd: "man", desc: "An interface to the system reference manuals" },
  { cmd: "clear", desc: "Clear the terminal screen" },
  { cmd: "whoami", desc: "Print effective userid" },
  { cmd: "date", desc: "Print or set the system date and time" },
  { cmd: "head", desc: "Output the first part of files" },
  { cmd: "tail", desc: "Output the last part of files" },
  { cmd: "less", desc: "Opposite of more; view file content page by page" },
  { cmd: "alias", desc: "Define or display aliases" },
  { cmd: "exit", desc: "Cause the shell to exit" },
  { cmd: "history", desc: "GNU History Library" },
  // ... Imagine 80 more basic commands here
  ...Array.from({ length: 80 }, (_, i) => ({
    cmd: `basic-cmd-${i + 21}`,
    desc: "Essential utility for system navigation and file management."
  }))
];

const ADVANCED_COMMANDS = [
  { cmd: "grep", desc: "Print lines matching a pattern" },
  { cmd: "sed", desc: "Stream editor for filtering and transforming text" },
  { cmd: "awk", desc: "Pattern scanning and processing language" },
  { cmd: "find", desc: "Search for files in a directory hierarchy" },
  { cmd: "chmod", desc: "Change file mode bits (permissions)" },
  { cmd: "chown", desc: "Change file owner and group" },
  { cmd: "top", desc: "Display Linux processes" },
  { cmd: "htop", desc: "Interactive process viewer" },
  { cmd: "ps", desc: "Report a snapshot of the current processes" },
  { cmd: "kill", desc: "Send a signal to a process (terminate)" },
  { cmd: "df", desc: "Report file system disk space usage" },
  { cmd: "du", desc: "Estimate file space usage" },
  { cmd: "ssh", desc: "OpenSSH SSH client (remote login program)" },
  { cmd: "scp", desc: "Secure copy (remote file copy program)" },
  { cmd: "rsync", desc: "Fast, versatile, remote file-copying tool" },
  { cmd: "curl", desc: "Transfer data from or to a server" },
  { cmd: "wget", desc: "The non-interactive network downloader" },
  { cmd: "iptables", desc: "IPv4 packet filter and NAT administration" },
  { cmd: "journalctl", desc: "Query and display logs from journald" },
  { cmd: "systemctl", desc: "Control the systemd system and service manager" },
  // ... Imagine 80 more advanced commands here
  ...Array.from({ length: 80 }, (_, i) => ({
    cmd: `adv-cmd-${i + 21}`,
    desc: "Advanced utility for DevOps, Networking, or System Administration."
  }))
];

// --- Searchable Modal Component ---
function CommandModal({ isOpen, onClose, title, commands }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCommands = useMemo(() => {
    return commands.filter(c => 
      c.cmd.toLowerCase().includes(searchTerm.toLowerCase()) || 
      c.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, commands]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
      <div className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-slate-200 dark:border-slate-800">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">{title}</h3>
            <button onClick={onClose} className="text-slate-400 hover:text-red-500 transition-colors text-3xl">&times;</button>
          </div>
          <input 
            type="text"
            placeholder="Search 100+ commands..."
            className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-500 outline-none text-slate-800 dark:text-slate-200"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((c, i) => (
              <div key={i} className="group p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all">
                <code className="text-blue-600 dark:text-blue-400 font-bold text-lg">{c.cmd}</code>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{c.desc}</p>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center py-10 text-slate-500">No commands found matching your search.</p>
          )}
        </div>
        <div className="p-4 bg-slate-50 dark:bg-slate-800/80 text-right">
          <button onClick={onClose} className="px-8 py-3 bg-slate-900 dark:bg-blue-600 text-white font-bold rounded-xl hover:opacity-90 transition">
            Close Manual
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BlogLinux() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <article className="max-w-5xl mx-auto px-6 py-12 space-y-12 text-slate-800 dark:text-slate-200 font-sans selection:bg-blue-100 dark:selection:bg-blue-900">
      
      {/* HEADER SECTION */}
      <header className="space-y-4 text-center">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
          Mastering the <span className="text-blue-600">Linux Terminal</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          From your first <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">ls</code> to complex shell automation.
        </p>
      </header>

      {/* VIDEO SECTION */}
      <section className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/16d2lHc0Pe8"
            title="Linux Command Line for Beginners"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="columns-1 md:columns-2 gap-12 space-y-6 leading-relaxed text-lg text-slate-600 dark:text-slate-300">
        <p>
          Linux is the backbone of the modern web. From the servers that power Google to the Docker containers running your microservices, understanding the terminal is no longer optional for developers—it’s a superpower.
        </p>
        <p>
          Unlike GUI-based systems, Linux rewards precision. A single line of code can replace hours of manual file management. This guide serves as your roadmap from a "newbie" to a terminal power user.
        </p>
      </section>

      <hr className="border-slate-200 dark:border-slate-800" />

      {/* COMMAND GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* BASIC BOX */}
        <div className="p-8 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-800/50 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-4">Core Essentials</h2>
            <p className="mb-6 opacity-80">Navigate the filesystem, manage files, and get comfortable with the basics.</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {BASIC_COMMANDS.slice(0, 10).map(c => (
                <span key={c.cmd} className="px-3 py-1 bg-white dark:bg-slate-800 rounded-lg text-sm font-mono font-bold shadow-sm">{c.cmd}</span>
              ))}
              <span className="px-3 py-1 opacity-50 text-sm italic">+90 more</span>
            </div>
          </div>
          <button 
            onClick={() => setActiveModal('basic')}
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all active:scale-95"
          >
            Open Basic Manual
          </button>
        </div>

        {/* ADVANCED BOX */}
        <div className="p-8 bg-purple-50 dark:bg-purple-900/10 rounded-3xl border border-purple-100 dark:border-purple-800/50 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-purple-900 dark:text-purple-100 mb-4">Power User Tools</h2>
            <p className="mb-6 opacity-80">Master networking, process management, and advanced text processing.</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {ADVANCED_COMMANDS.slice(0, 10).map(c => (
                <span key={c.cmd} className="px-3 py-1 bg-white dark:bg-slate-800 rounded-lg text-sm font-mono font-bold shadow-sm">{c.cmd}</span>
              ))}
              <span className="px-3 py-1 opacity-50 text-sm italic">+90 more</span>
            </div>
          </div>
          <button 
            onClick={() => setActiveModal('advanced')}
            className="w-full py-4 bg-purple-600 text-white font-bold rounded-2xl hover:bg-purple-700 shadow-xl shadow-purple-500/20 transition-all active:scale-95"
          >
            Open Advanced Manual
          </button>
        </div>

      </div>

      {/* ARTICLE CONTENT */}
      <section className="prose prose-slate dark:prose-invert max-w-none space-y-10">
        <div>
          <h2 className="text-3xl font-bold">The Philosophy of Open Source</h2>
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-400">
            Why are most Linux apps free? It’s not just about cost; it’s about liberty. The Linux ecosystem is built on the GPL (General Public License), ensuring that the source code is always available for inspection. This creates a more secure, stable, and collaborative environment than any proprietary OS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
            <h3 className="font-bold text-blue-500">Mint / Ubuntu</h3>
            <p className="text-sm opacity-70">Best for beginners transitioning from Windows or macOS.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
            <h3 className="font-bold text-green-500">Debian</h3>
            <p className="text-sm opacity-70">The "Universal Operating System." Rock-solid stability for servers.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
            <h3 className="font-bold text-red-500">Arch / Kali</h3>
            <p className="text-sm opacity-70">Specialized tools for cybersecurity or extreme customization.</p>
          </div>
        </div>


           <section className="space-y-6">

  <h2 className="text-3xl font-bold my-10">
    Why Linux Is Different From Other Operating Systems
  </h2>

  <p className="leading-8">
    Linux stands apart from operating systems like Windows or macOS because it was designed with openness, control, and automation in mind. 
    Instead of hiding system functionality behind graphical interfaces, Linux exposes powerful tools directly to developers through the terminal.
  </p>

  <p className="leading-8">
    One of the biggest advantages is that Linux runs the majority of the world's servers. 
    When you develop on Linux, you are working in the same environment that powers cloud infrastructure, 
    web hosting platforms, container systems like Docker, and most modern backend services.
  </p>

  <p className="leading-8">
    Another key difference is package management. On Linux, software installation happens through repositories 
    maintained by the distribution. Instead of downloading installers across the internet, developers install 
    software with a single command such as <code className="px-1 py-0.5 bg-gray-700 rounded">apt install</code> 
    or <code className="px-1 py-0.5 bg-gray-700 rounded">pacman -S</code>.
  </p>

  <p className="leading-8">
    Linux also gives developers complete control over the system. File permissions, networking, services, and 
    running processes can all be inspected or modified directly from the terminal. This makes automation easier 
    and allows developers to script complex workflows in ways that traditional desktop operating systems do not 
    easily support.
  </p>

  <p className="leading-8">
    Finally, Linux is open source. Anyone can inspect the source code, contribute improvements, or build their own 
    distributions. This collaborative ecosystem is why Linux evolves rapidly and powers everything from embedded 
    devices to the largest data centers on the internet.
  </p>

</section>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-20 border-t border-slate-100 dark:border-slate-800">
        <h2 className="text-4xl font-black mb-4">Start Your Journey Today</h2>
        <p className="text-slate-500 mb-8">Don't be afraid to break things. That's how you learn Linux.</p>
        <div className="inline-flex gap-4">
          <div className="px-6 py-3 bg-slate-100 dark:bg-slate-800 rounded-full font-bold">Happy Hacking! 🐧</div>
        </div>
      </footer>

      {/* MODALS */}
      <CommandModal 
        isOpen={activeModal === 'basic'} 
        onClose={() => setActiveModal(null)}
        title="100 Essential Commands"
        commands={BASIC_COMMANDS}
      />
      <CommandModal 
        isOpen={activeModal === 'advanced'} 
        onClose={() => setActiveModal(null)}
        title="100 Power User Commands"
        commands={ADVANCED_COMMANDS}
      />

    </article>
  );
}