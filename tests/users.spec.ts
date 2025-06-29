// Exemplo alternativo explícito
import { test, expect, request } from "@playwright/test";
import { UsersAPI } from "../api/UsersAPI";

test.beforeEach(async ({}, testInfo) => {
  testInfo.annotations.push(
    { type: "owner", description: "Christopher" },
    { type: "severity", description: "critical" },
    { type: "story", description: "REQRES-1234 - Criação de usuários" },
    { type: "feature", description: "Users API" }
  );
});

test("Create User usando UsersAPI", async () => {
  const requestContext = await request.newContext({
    baseURL: "https://reqres.in",
    extraHTTPHeaders: {
      "x-api-key": "reqres-free-v1",
    },
  });

  const usersApi = new UsersAPI(requestContext);

  const payload = {
    name: "Chris",
    job: "QA Pleno",
  };

  const response = await usersApi.createUser(payload);
  const body = await response.json();

  console.log("STATUS:", response.status());
  console.log("BODY:", body);

  expect(response.status()).toBe(201);
  expect(body.name).toBe(payload.name);
  expect(body.job).toBe(payload.job);

  await requestContext.dispose();
});
