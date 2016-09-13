
export default function hello(user = 'World') {
  return `Hello ${user}!\n`;
}

if (require.main === module) {
  process.stdout.write(hello());
}
