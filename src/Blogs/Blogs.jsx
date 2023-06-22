import React from "react";

const Blogs = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-2xl text-center font-bold ">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h1>
          <p>
            In authentication and authorisation systems, access tokens and
            refresh tokens are frequently employed. Let me describe them and how
            they operate: <br />
            <br /> 1. Access Token: An access token is a type of credential used
            to authenticate and grant access to a client application or user to
            restricted resources like APIs or web services. After the user has
            successfully authenticated, an authentication server will normally
            provide them a string of characters. The user's profile and the
            rights that have been granted to them are both listed in the access
            token.
            <br />
            2. Refresh Token: When an existing access token expires, a refresh
            token can be used to request a new one. In contrast to the access
            token, it normally has a longer lifespan and an earlier expiration
            date. During the initial authentication process, the refresh token
            is issued together with the access token. <br />
            <br /> The normal access token and refresh token flow is as follows:{" "}
            <br />
            1. User authentication: The user gives the authentication server
            their credentials (such as their login and password). <br /> 2.
            Token Issuance: The authentication server generates an access token
            and a refresh token if the credentials are legitimate.
          </p>
          <br />
          <br />
          <br />
          <h1 className="text-2xl text-center font-bold ">
            Compare SQL and NoSQL databases?
          </h1>
          <p>
            The choice between SQL and NoSQL databases depends on factors like
            the nature of the data, scalability requirements, consistency needs,
            development agility, and the specific use case of the application.{" "}
            <br />
            SQL: SQL databases are vertically scalable, meaning they can handle
            increased workload by upgrading hardware resources (e.g., CPU,
            memory). Scaling horizontally by adding more servers is possible but
            requires more complex setups like sharding or replication. <br />
            <br />
            NoSQL: NoSQL databases are designed to be horizontally scalable,
            making it easier to distribute data across multiple servers. They
            can handle large amounts of data and high traffic by adding more
            machines to the cluster.
          </p>
          <br />
          <br />
          <br />
          <h1 className="text-2xl text-center font-bold my-2 ">
            What is express js? What is Nest JS ?
          </h1>
          <p>
            Express.js: Express.js is a popular web application framework for
            Node.js. It provides a simple and flexible way to build web
            applications and APIs. Express.js is known for its minimalist
            design, allowing developers to create web servers and define routes
            easily. Key features of Express.js include: Routing: Express.js
            allows defining routes for different HTTP methods (GET, POST, PUT,
            DELETE, etc.) and handling requests to specific URLs. Middleware:
            Express.js provides a middleware system, allowing developers to add
            modular functions that can process requests before they reach the
            route handler. Middleware functions can perform tasks like
            authentication, logging, error handling, etc. Templating: Express.js
            supports various template engines (such as EJS, Pug, Handlebars) for
            generating dynamic HTML pages. HTTP utility methods: Express.js
            provides utility methods for working with HTTP requests and
            responses, making it easier to handle headers, cookies, query
            parameters, and more. Express.js is widely used in the Node.js
            ecosystem and is suitable for building small to medium-sized web
            applications or APIs. It has a large and active community with
            extensive documentation and a rich ecosystem of middleware and
            plugins. <br />
            <br /> NestJS: NestJS is a progressive, TypeScript-based web
            application framework built on top of Node.js. It is inspired by
            Angular's architecture and uses similar concepts such as modules,
            controllers, and decorators to create scalable and maintainable
            server-side applications.
          </p>{" "}
          <br />
          <br />
          <br />
          <h1 className="text-2xl text-center font-bold my-2 ">
            What is MongoDB aggregate and how does it work ?
          </h1>
          <p>
            MongoDB's aggregation framework is a powerful tool for performing
            advanced data processing operations on collections of documents. It
            allows you to process and analyze data within the database using a
            pipeline of stages that transform and manipulate the documents. The
            aggregation framework in MongoDB provides a flexible and efficient
            way to perform complex data analysis tasks within the database
            itself. It supports a wide range of operations and can handle large
            volumes of data efficiently by leveraging indexes and native query
            execution. When using MongoDB's aggregation framework, it's
            recommended to design the pipeline stages carefully to optimize
            performance and make efficient use of indexes. Understanding the
            available operators, stages, and data processing techniques can help
            you leverage the full power of the aggregation framework for your
            specific data analysis needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
