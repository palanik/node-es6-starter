
export default function hello(user = '    World') {
  const u = user.trimStart().trimEnd();
  return `Hello ${u}!\n`;
}

if (require.main === module) {
  process.stdout.write(hello());
}
