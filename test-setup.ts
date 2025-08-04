// Run this with: node test-setup.js
const { PrismaClient } = require("@prisma/client")
require("dotenv").config({ path: ".env.local" })

async function testSetup() {
  console.log("🧪 Testing project setup...\n")

  // 1. Check environment variables
  console.log("1️⃣ Checking environment variables:")
  console.log("   DATABASE_URL:", process.env.DATABASE_URL ? "✅ Set" : "❌ Missing")
  console.log("   JWT_SECRET:", process.env.JWT_SECRET ? "✅ Set" : "❌ Missing")

  if (!process.env.DATABASE_URL || !process.env.JWT_SECRET) {
    console.log("\n❌ Missing required environment variables!")
    console.log("Create a .env.local file with:")
    console.log('DATABASE_URL="mongodb://localhost:27017/project-dashboard"')
    console.log('JWT_SECRET="your-long-random-secret-here"')
    return
  }

  // 2. Test database connection
  console.log("\n2️⃣ Testing database connection:")
  const prisma = new PrismaClient()

  try {
    await prisma.$connect()
    console.log("   ✅ Database connection successful")

    // 3. Test database operations
    console.log("\n3️⃣ Testing database operations:")

    // Try to create a test user
    const testUser = await prisma.user.create({
      data: {
        name: "Test User",
        email: "test-" + Date.now() + "@example.com",
        password: "hashedpassword123",
      },
    })
    console.log("   ✅ User creation successful")

    // Clean up
    await prisma.user.delete({
      where: { id: testUser.id },
    })
    console.log("   ✅ User deletion successful")

    console.log("\n🎉 All tests passed! Your setup is working correctly.")
  } catch (error) {
    if (error instanceof Error) {
      console.log("   ❌ Database error:", error.message);

      if (error.message.includes("connect")) {
        console.log("\n💡 Database connection tips:");
        console.log("   - Make sure MongoDB is running");
        console.log("   - Check your DATABASE_URL format");
        console.log("   - For local MongoDB: mongodb://localhost:27017/project-dashboard");
        console.log("   - For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/database");
      }
    } else {
      console.log("   ❌ Database error:", error);
    }
  } finally {
    await prisma.$disconnect()
  }
}

testSetup().catch(console.error)
