import { test, expect } from "@playwright/test";
test.beforeEach(async ({}, testInfo) => {
  testInfo.annotations.push(
    { type: "owner", description: "Christopher" },
    { type: "severity", description: "critical" },
    { type: "story", description: "REQRES-1234 - API" },
    { type: "feature", description: "Users API" }
  );
});

test("POST user direto sem baseURL com header de autenticação", async ({
  request,
}) => {
  const response = await request.post("https://reqres.in/api/users", {
    data: {
      name: "Chris",
      job: "QA Pleno",
    },
    headers: {
      "x-api-key": "reqres-free-v1",
    },
  });

  const body = await response.json();
  console.log("STATUS:", response.status());
  console.log("BODY:", body);

  expect(response.status()).toBe(201);
  expect(body.name).toBe("Chris");
  expect(body.job).toBe("QA Pleno");
});
