/**
 * Adds seed data to your db
 *
 * @link https://www.prisma.io/docs/guides/database/seed-database
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const firstUserId = '186492cb-3eab-4aa4-ab9c-8e79004c83a9';

async function main() {
  await prisma.user.upsert({
    where: {
      id: firstUserId,
    },
    create: {
      id: firstUserId,
      email: 'dayana@dev02.team',
      name: 'Dayana Panova',
    },
    update: {},
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
