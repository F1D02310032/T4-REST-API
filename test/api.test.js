import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import app from "../src/app.js";
import { tanamanHias } from "../src/data/tanaman-hias.js";

let server;
let baseUrl;

before(async () => {
  server = app.listen(0);
  await new Promise((resolve) => server.once("listening", resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  await new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
});

test("GET / menampilkan pesan sambutan", async () => {
  const response = await fetch(`${baseUrl}/`);

  assert.equal(response.status, 200);
  assert.match(await response.text(), /REST API koleksi tanaman hias/);
});

test("GET /tanaman-hias mengembalikan minimal 10 data", async () => {
  const response = await fetch(`${baseUrl}/tanaman-hias`);
  const body = await response.json();

  assert.equal(response.status, 200);
  assert.equal(body.data.length, 10);
  assert.ok(body.data.every((item) => Number.isInteger(item.id)));
});

test("GET detail mengembalikan data dan 404 untuk id yang tidak ada", async () => {
  const found = await fetch(`${baseUrl}/tanaman-hias/1`);
  const foundBody = await found.json();
  const missing = await fetch(`${baseUrl}/tanaman-hias/999`);
  const missingBody = await missing.json();

  assert.equal(found.status, 200);
  assert.equal(foundBody.data.id, 1);
  assert.equal(missing.status, 404);
  assert.deepEqual(missingBody.error, {
    pesan: "Tanaman hias tidak ditemukan.",
    kode: 404
  });
});

test("DELETE menghapus data dan mengembalikan 404 untuk id yang tidak ada", async () => {
  const removedPlant = tanamanHias.find((item) => item.id === 10);
  const deleted = await fetch(`${baseUrl}/tanaman-hias/10`, { method: "DELETE" });
  const listAfterDelete = await fetch(`${baseUrl}/tanaman-hias`);
  const listBody = await listAfterDelete.json();
  const missing = await fetch(`${baseUrl}/tanaman-hias/10`, { method: "DELETE" });
  const missingBody = await missing.json();

  assert.equal(deleted.status, 204);
  assert.equal(listBody.data.length, 9);
  assert.equal(missing.status, 404);
  assert.equal(missingBody.error.kode, 404);

  tanamanHias.push(removedPlant);
});
