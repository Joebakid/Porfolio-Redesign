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
  { cmd: "tree", desc: "Display directories as trees" },
  { cmd: "file", desc: "Determine file type" },
  { cmd: "stat", desc: "Display file or file system status" },
  { cmd: "ln", desc: "Make links between files" },
  { cmd: "basename", desc: "Strip directory and suffix from filenames" },
  { cmd: "dirname", desc: "Strip last component from file name" },
  { cmd: "which", desc: "Locate a command" },
  { cmd: "whereis", desc: "Locate binary, source, and manual page files" },
  { cmd: "type", desc: "Describe how a command name would be interpreted" },
  { cmd: "help", desc: "Display help for shell builtins" },
  { cmd: "printf", desc: "Format and print data" },
  { cmd: "wc", desc: "Print newline, word, and byte counts" },
  { cmd: "sort", desc: "Sort lines of text files" },
  { cmd: "uniq", desc: "Report or omit repeated lines" },
  { cmd: "cut", desc: "Remove sections from each line of files" },
  { cmd: "paste", desc: "Merge lines of files" },
  { cmd: "tr", desc: "Translate or delete characters" },
  { cmd: "split", desc: "Split a file into pieces" },
  { cmd: "nl", desc: "Number lines of files" },
  { cmd: "tee", desc: "Read from standard input and write to files and standard output" },
  { cmd: "cmp", desc: "Compare two files byte by byte" },
  { cmd: "diff", desc: "Compare files line by line" },
  { cmd: "comm", desc: "Compare two sorted files line by line" },
  { cmd: "expand", desc: "Convert tabs to spaces" },
  { cmd: "unexpand", desc: "Convert spaces to tabs" },
  { cmd: "yes", desc: "Output a string repeatedly until killed" },
  { cmd: "sleep", desc: "Delay for a specified amount of time" },
  { cmd: "cal", desc: "Display a calendar" },
  { cmd: "uptime", desc: "Tell how long the system has been running" },
  { cmd: "uname", desc: "Print system information" },
  { cmd: "hostname", desc: "Show or set the system host name" },
  { cmd: "id", desc: "Print real and effective user and group IDs" },
  { cmd: "groups", desc: "Print the groups a user belongs to" },
  { cmd: "users", desc: "Print the user names of users currently logged in" },
  { cmd: "who", desc: "Show who is logged on" },
  { cmd: "w", desc: "Show who is logged on and what they are doing" },
  { cmd: "passwd", desc: "Change a user password" },
  { cmd: "su", desc: "Run a shell with substitute user and group IDs" },
  { cmd: "sudo", desc: "Execute a command as another user" },
  { cmd: "env", desc: "Run a program in a modified environment" },
  { cmd: "printenv", desc: "Print all or part of environment" },
  { cmd: "export", desc: "Set environment variables for child processes" },
  { cmd: "unset", desc: "Remove shell variables or functions" },
  { cmd: "source", desc: "Read and execute commands from a file in the current shell" },
  { cmd: ".", desc: "Shorthand for sourcing a file in the current shell" },
  { cmd: "bind", desc: "Set Readline key bindings and functions" },
  { cmd: "dirs", desc: "Display directory stack" },
  { cmd: "pushd", desc: "Add directories to the directory stack" },
  { cmd: "popd", desc: "Remove directories from the directory stack" },
  { cmd: "locate", desc: "Find files by name using a prebuilt database" },
  { cmd: "updatedb", desc: "Update the file name database used by locate" },
  { cmd: "realpath", desc: "Print the resolved absolute file name" },
  { cmd: "readlink", desc: "Print resolved symbolic links or file names" },
  { cmd: "install", desc: "Copy files and set attributes" },
  { cmd: "mktemp", desc: "Create a temporary file or directory" },
  { cmd: "od", desc: "Dump files in octal and other formats" },
  { cmd: "strings", desc: "Print printable character sequences in files" },
  { cmd: "rev", desc: "Reverse lines characterwise" },
  { cmd: "seq", desc: "Print a sequence of numbers" },
  { cmd: "xargs", desc: "Build and execute command lines from standard input" },
  { cmd: "watch", desc: "Execute a program periodically and show output fullscreen" },
  { cmd: "script", desc: "Make a typescript of terminal session" },
  { cmd: "rename", desc: "Rename files in bulk" },
  { cmd: "shred", desc: "Overwrite a file to hide its contents" },
  { cmd: "chgrp", desc: "Change group ownership" },
  { cmd: "umask", desc: "Set default file mode creation mask" },
  { cmd: "column", desc: "Columnate lists" },
  { cmd: "fmt", desc: "Simple optimal text formatter" },
  { cmd: "fold", desc: "Wrap lines to fit a specified width" },
  { cmd: "pr", desc: "Paginate or columnate files for printing" },
  { cmd: "join", desc: "Join lines of two files on a common field" },
  { cmd: "shuf", desc: "Generate random permutations" },
  { cmd: "sum", desc: "Checksum and count blocks in a file" },
  { cmd: "cksum", desc: "Display CRC checksum and byte counts" },
  { cmd: "md5sum", desc: "Compute and check MD5 message digest" },
  { cmd: "sha256sum", desc: "Compute and check SHA-256 message digest" },
  { cmd: "gzip", desc: "Compress or expand files" },
  { cmd: "gunzip", desc: "Decompress gzip files" },
  { cmd: "zip", desc: "Package and compress files" },
  { cmd: "unzip", desc: "List, test, or extract compressed files in a ZIP archive" }
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
  { cmd: "ss", desc: "Investigate sockets" },
  { cmd: "netstat", desc: "Print network connections and routing tables" },
  { cmd: "ip", desc: "Show and manipulate routing, devices, policy routing, and tunnels" },
  { cmd: "ping", desc: "Send ICMP ECHO_REQUEST to network hosts" },
  { cmd: "traceroute", desc: "Print the route packets trace to a network host" },
  { cmd: "tracepath", desc: "Trace path to a network host discovering MTU" },
  { cmd: "dig", desc: "DNS lookup utility" },
  { cmd: "nslookup", desc: "Query Internet name servers interactively" },
  { cmd: "host", desc: "DNS lookup utility for names and addresses" },
  { cmd: "nc", desc: "Arbitrary TCP and UDP connections and listens" },
  { cmd: "telnet", desc: "User interface to the TELNET protocol" },
  { cmd: "tcpdump", desc: "Dump traffic on a network" },
  { cmd: "nmap", desc: "Network exploration tool and security scanner" },
  { cmd: "arp", desc: "Manipulate the system ARP cache" },
  { cmd: "route", desc: "Show or manipulate the IP routing table" },
  { cmd: "nmcli", desc: "Command-line tool for controlling NetworkManager" },
  { cmd: "hostnamectl", desc: "Control the system host name" },
  { cmd: "timedatectl", desc: "Control the system time and date" },
  { cmd: "loginctl", desc: "Control the systemd login manager" },
  { cmd: "service", desc: "Run a System V init script" },
  { cmd: "crontab", desc: "Maintain crontab files for individual users" },
  { cmd: "at", desc: "Queue, examine, or delete jobs for later execution" },
  { cmd: "batch", desc: "Queue commands to run when system load permits" },
  { cmd: "nohup", desc: "Run a command immune to hangups" },
  { cmd: "time", desc: "Run programs and summarize system resource usage" },
  { cmd: "strace", desc: "Trace system calls and signals" },
  { cmd: "ltrace", desc: "Trace library calls" },
  { cmd: "lsof", desc: "List open files" },
  { cmd: "fuser", desc: "Identify processes using files or sockets" },
  { cmd: "pgrep", desc: "Look up processes based on name and other attributes" },
  { cmd: "pkill", desc: "Send signals to processes based on name and attributes" },
  { cmd: "pidof", desc: "Find the process ID of a running program" },
  { cmd: "nice", desc: "Run a program with modified scheduling priority" },
  { cmd: "renice", desc: "Alter priority of running processes" },
  { cmd: "free", desc: "Display amount of free and used memory" },
  { cmd: "vmstat", desc: "Report virtual memory statistics" },
  { cmd: "iostat", desc: "Report CPU and I/O statistics" },
  { cmd: "iotop", desc: "Display I/O usage by processes" },
  { cmd: "sar", desc: "Collect and report system activity information" },
  { cmd: "mpstat", desc: "Report processor statistics" },
  { cmd: "dmesg", desc: "Print or control the kernel ring buffer" },
  { cmd: "lsblk", desc: "List block devices" },
  { cmd: "blkid", desc: "Locate and print block device attributes" },
  { cmd: "mount", desc: "Mount a filesystem" },
  { cmd: "umount", desc: "Unmount filesystems" },
  { cmd: "fdisk", desc: "Manipulate disk partition table" },
  { cmd: "parted", desc: "Disk partition manipulation program" },
  { cmd: "mkfs", desc: "Build a Linux filesystem" },
  { cmd: "fsck", desc: "Check and repair a Linux filesystem" },
  { cmd: "tune2fs", desc: "Adjust tunable filesystem parameters" },
  { cmd: "swapon", desc: "Enable devices and files for paging and swapping" },
  { cmd: "swapoff", desc: "Disable devices and files for paging and swapping" },
  { cmd: "dd", desc: "Convert and copy a file with low-level control" },
  { cmd: "tar", desc: "Archive utility for files and directories" },
  { cmd: "zstd", desc: "Compress or decompress files using Zstandard" },
  { cmd: "bzip2", desc: "Block-sorting file compressor" },
  { cmd: "xz", desc: "Compress or decompress .xz and .lzma files" },
  { cmd: "openssl", desc: "Cryptography and SSL/TLS toolkit" },
  { cmd: "gpg", desc: "Encrypt and sign data and communication" },
  { cmd: "ufw", desc: "Manage a simplified netfilter firewall" },
  { cmd: "firewall-cmd", desc: "Runtime interface for firewalld" },
  { cmd: "nft", desc: "Administration tool for nftables" },
  { cmd: "useradd", desc: "Create a new user or update default new user information" },
  { cmd: "usermod", desc: "Modify a user account" },
  { cmd: "userdel", desc: "Delete a user account and related files" },
  { cmd: "groupadd", desc: "Create a new group" },
  { cmd: "groupmod", desc: "Modify a group definition" },
  { cmd: "groupdel", desc: "Delete a group" },
  { cmd: "visudo", desc: "Edit the sudoers file safely" },
  { cmd: "getfacl", desc: "Get file access control lists" },
  { cmd: "setfacl", desc: "Set file access control lists" },
  { cmd: "semanage", desc: "SELinux policy management tool" },
  { cmd: "getenforce", desc: "Get the current SELinux mode" },
  { cmd: "setenforce", desc: "Set the current SELinux mode" },
  { cmd: "docker", desc: "Pack, ship, and run containers" },
  { cmd: "podman", desc: "Manage containers and pods without a daemon" },
  { cmd: "kubectl", desc: "Control Kubernetes clusters" },
  { cmd: "helm", desc: "Kubernetes package manager" },
  { cmd: "ansible", desc: "Automation tool for configuration management and orchestration" },
  { cmd: "git", desc: "Distributed version control system" }
];

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md">
      <div className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-slate-200 dark:border-slate-800">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">{title}</h3>
            <button onClick={onClose} className="hover:opacity-70 transition-colors text-3xl text-slate-500">
              &times;
            </button>
          </div>

          <input
            type="text"
            placeholder="Search 100+ commands..."
            className="w-full p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-none outline-none text-slate-900 dark:text-slate-100 placeholder:text-slate-500"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((c, i) => (
              <div key={i} className="group p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                <code className="font-bold text-lg text-slate-900 dark:text-blue-400">{c.cmd}</code>
                <p className="text-sm mt-1">{c.desc}</p>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center py-10 text-slate-500">
              No commands found matching your search.
            </p>
          )}
        </div>

        <div className="p-4 bg-slate-50 dark:bg-slate-800/80 text-right">
          <button onClick={onClose} className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition">
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
    <article className="max-w-5xl mx-auto px-6 py-12 space-y-12 font-sans selection:bg-slate-200 dark:selection:bg-slate-800">

      <header className="space-y-4 text-center">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight ">
          Mastering the <span className="text-blue-600 dark:text-blue-400">Linux Terminal</span>
        </h1>

        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          From your first <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-slate-900 dark:text-slate-200">ls</code> to complex shell automation.
        </p>
      </header>

      <section className="relative group">
        <div className="absolute -inset-1 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

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

      <section className="columns-1 md:columns-2 gap-12 space-y-6 leading-relaxed text-lg">
        <p>
          Linux is the backbone of the modern web. From the servers that power Google to the Docker containers running your microservices, understanding the terminal is no longer optional for developers—it’s a superpower.
        </p>

        <p>
          Unlike GUI-based systems, Linux rewards precision. A single line of code can replace hours of manual file management. This guide serves as your roadmap from a "newbie" to a terminal power user.
        </p>
      </section>

      <hr className="border-slate-200 dark:border-slate-800" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4 ">Core Essentials</h2>
            <p className="mb-6">Navigate the filesystem, manage files, and get comfortable with the basics.</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {BASIC_COMMANDS.slice(0, 10).map(c => (
                <span key={c.cmd} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 rounded-lg text-sm font-mono font-bold shadow-sm">
                  {c.cmd}
                </span>
              ))}

              <span className="px-3 py-1 text-sm italic text-slate-500">+90 more</span>
            </div>
          </div>

          <button
            onClick={() => setActiveModal("basic")}
            className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 shadow-xl transition-all active:scale-95"
          >
            Open Basic Manual
          </button>
        </div>

        <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4 ">Power User Tools</h2>
            <p className="mb-6">Master networking, process management, and advanced text processing.</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {ADVANCED_COMMANDS.slice(0, 10).map(c => (
                <span key={c.cmd} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 rounded-lg text-sm font-mono font-bold shadow-sm">
                  {c.cmd}
                </span>
              ))}

              <span className="px-3 py-1 text-sm italic text-slate-500">+90 more</span>
            </div>
          </div>

          <button
            onClick={() => setActiveModal("advanced")}
            className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 shadow-xl transition-all active:scale-95"
          >
            Open Advanced Manual
          </button>
        </div>
      </div>

      <section className="prose prose-slate dark:prose-invert max-w-none space-y-10">

        <div>
          <h2 className="text-3xl font-bold">The Philosophy of Open Source</h2>
          <p className="text-lg leading-8">
            Why are most Linux apps free? It’s not just about cost; it’s about liberty. The Linux ecosystem is built on the GPL (General Public License), ensuring that the source code is always available for inspection. This creates a more secure, stable, and collaborative environment than any proprietary OS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl   border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold bg-blue-400 rounded-2xl my-2">Mint / Ubuntu</h3>
            <p className="text-sm">Best for beginners transitioning from Windows or macOS.</p>
          </div>

          <div className="p-6 rounded-2xl    border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold  bg-blue-400 rounded-2xl my-2">Debian</h3>
            <p className="text-sm">The "Universal Operating System." Rock-solid stability for servers.</p>
          </div>

          <div className="p-6 rounded-2xl   border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold bg-blue-400 rounded-2xl my-2">Arch / Kali</h3>
            <p className="text-sm">Specialized tools for cybersecurity or extreme customization.</p>
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
            software with a single command such as <code className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200 rounded">apt install</code>
            or <code className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-200 rounded">pacman -S</code>.
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

      <footer className="text-center py-20 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-4xl font-black mb-4 text-slate-900 dark:text-white">Start Your Journey Today</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8">Don't be afraid to break things. That's how you learn Linux.</p>

        <div className="inline-flex gap-4">
          <div className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 rounded-full font-bold">
            Happy Hacking! 🐧
          </div>
        </div>
      </footer>

      <CommandModal
        isOpen={activeModal === "basic"}
        onClose={() => setActiveModal(null)}
        title="100 Essential Commands"
        commands={BASIC_COMMANDS}
      />

      <CommandModal
        isOpen={activeModal === "advanced"}
        onClose={() => setActiveModal(null)}
        title="100 Power User Commands"
        commands={ADVANCED_COMMANDS}
      />

    </article>
  );
}
