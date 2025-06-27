export function generateUsers(count = 10, offset = 0) {
  return Array.from({ length: count }).map((_, i) => ({
    id: String(i + offset),
    name: `user name ${i + offset}`,
    email: `user_${i + offset}@gmail.co`,
    image: `https://i.pravatar.cc/${100 * (i + 1 + offset)}`,
  }));
}
