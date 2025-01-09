export default function help(args: string[]) {
  if (args.length > 1) {
    return `Incorrect usage of the help command. Use "help help" to see how to use this command.`;
  }

  const arg = args[0];

  const html = `
COMMANDS
  about                      Show details about the site
  clear                      Clear the screen
  color [color] [format]     Convert colors from one format to another
  help [command]             Display help menu
  ls [directory] [--keys]    List contents of directory
  open [key] [--source]      Open link or source in a new tab
`;

  const commands: { [index: string]: string } = {
    about: `
NAME: about – Show details about the site
USAGE: about
`,
    clear: `
NAME: clear – Clear the screen
USAGE: clear
`,
    color: `
NAME: color – Convert colors from one format to another
USAGE: color [color] [format]
ARGUMENTS:
  color         The color that you would like to convert to another format.
                This can be in any existing format, such as hex, RGB, LCH, etc.
  format        The format that you would like to convert to. This can be in
                any existing format, such as hex, RGB, LCH, etc.
`,
    help: `
NAME: help – Display help menu
USAGE: help [command]
ARGUMENTS:
  command        The command to list the help guide for. If this argument is
                 not provided, the list of commands and their descriptions is
                 displayed.
`,
    ls: `
NAME: ls – List contents of directory
USAGE: ls [directory] [--keys]
ARGUMENTS:
  directory        The directory for which to list contents for. If this
                   argument is not provided, the contents of the current
                   directory are listed. Directory names end with a
                   backslash (/).
OPTIONS:
  keys             Display the keys of the listed links, so that they can be
                   used with the "open" command. The keys are displayed in
                   (parentheses) at the end of the links.
`,
    open: `
NAME: open – Open link or source in a new tab
USAGE: open [key] [--source]
ARGUMENTS:
  key           The key of the link you'd like to open. This will open the link to
                the website by default, unless the project or contact doesn't have
                a website or if the "--source" flag is used, in which case the
                link to the source will be opened. You can obtain this key from
                the "ls" command with the "--keys" flag.
OPTIONS:
  source        Open the link to the source code, even if there is a website link
                available.
`,
  };

  if (arg && commands[arg]) {
    return commands[arg].trim();
  }

  return html.trim();
}
