const request = require("supertest");
const app = require("./app");

describe("Chart APIs testing", () => {
  it("GET /chart --> array of chart data", () => {
    return request(app)
      .get("/chart")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              name: expect.any(String),
              age: expect.any(Number),
              gender: expect.any(Boolean),
            }),
          ])
        );
      });
  });

  it("POST /chart --> add new chart data", () => {
    request(app)
      .post("/chart")
      .send({
        name: "John Wick",
        age: "22",
        gender: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .expect("Content-Type", /json/)
      .expect(201)
      .then((res) => {
        expect(res.body).toEqual(
          expect.objectContaining({
            status: expect.any(String),
            created_data: expect.objectContaining({               
              name: expect.any(String),
              age: expect.any(String),
              gender: expect.any(Boolean),
            }),
          })
        );
      });
  });

  it("GET /pie --> get chart data for pie chart", () => {
    return request(app)
      .get("/pie")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              gender: expect.any(Number),
              count: expect.any(Number),
            }),
          ])
        );
      });
  });

  it("GET /bar --> get chart data for bar chart", () => {
    return request(app)
      .get("/bar")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual(expect.arrayContaining([expect.any(Number)]));
      });
  });
});
