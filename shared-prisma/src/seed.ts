import { constants } from 'buffer';
import {PrismaClient} from '../prisma/generated/prisma' ;
  console.log('Seeding  jjkh constants...');
export const prisma = new PrismaClient();
  console.log('Seeding constants...');
async function main() {
  // 1. Constants

  // const constants = await prisma.$transaction([
  //   prisma.constants.create({ data: { code: 'ROLE_SUPERADMIN' } }),
  //   prisma.constants.create({ data: { code: 'ROLE_ADMIN' } }),
  //   prisma.constants.create({ data: { code: 'ROLE_EMPLOYEE' } }),
  //   prisma.constants.create({ data: { code: 'REAL_ESTATE' } }),
  //   prisma.constants.create({ data: { code: 'EQUITY_OWNERSHIP' } }),
  //   prisma.constants.create({ data: { code: 'ROYALTIES_OR_IP' } }),
  //   prisma.constants.create({ data: { code: 'BUSINESS_OWNERSHIP' } }),
  //   prisma.constants.create({ data: { code: 'GOLD' } }),
  //   prisma.constants.create({ data: { code: 'SILVER' } }),
  // ]);
const constants = await prisma.constants.findMany();
  const constantsMap = Object.fromEntries(constants.map(c => [c.code, c.const_id]));

  // // 2. Companies
  // const companies = await prisma.$transaction([
  //   prisma.companies.create({ data: { company_name: 'Company 1', region: 'Dallas' } }),
  //   prisma.companies.create({ data: { company_name: 'Company 2', region: 'Texas' } }),
  //   prisma.companies.create({ data: { company_name: 'Company 3', region: 'Virginia' } }),
  // ]);
const companies = await prisma.companies.findMany();
  // 3. Users and Employees
  const users = await Promise.all(
    Array.from({ length: 5 }, async (_, i) => {
      const user = await prisma.users.create({
        data: {
          name: `Employee ${i + 1}`,
          email: `employee${i + 1}@company.com`,
          password: 'securepassword',
          phone_number: `12345678${i}`,
          region: ['Texas', 'Dallas', 'Virginia'][i % 3],
          role: 'b9f67327-6490-47ec-b4da-3365d97438e1',
          mfa_enabled: false,
        },
      });

      await prisma.employees.create({
        data: {
          user_id: user.user_id,
          company_id: companies[i % 3].company_id,
        },
      });

      return user;
    })
  );

  // 4. Properties
  const regions = ['Texas', 'Dallas', 'Virginia'];
  const unitTypes = ['yards'];

  await Promise.all(
    Array.from({ length: 5 }, (_, i) => {
      return prisma.assets.create({
        data: {
          asset_type_id: constantsMap['REAL_ESTATE'],
          description: `Property ${i + 1} in ${regions[i % regions.length]}`,
          region: regions[i % regions.length],
          quantity: parseFloat((Math.random() * 10000 + 1).toFixed(2)),
          unit_of_measurement: unitTypes[i % unitTypes.length],
          unit_value: parseFloat((Math.random() * 100000 + 10000).toFixed(2)),
          total_value: parseFloat((Math.random() * 200000 + 50000).toFixed(2)),
          valuation_method: 'Market',
          valuation_date: new Date(),
        },
      });
    })
  );

  console.log('Seeding completed ✅');
}

main()
  .catch(e => {
    console.error(e);
   
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
